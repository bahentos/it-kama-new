import React, { useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./compontents/Common/Preloader/Preloader";
import Login from "./compontents/Login/Login";
import Navbar from "./compontents/Navbar/Navbar";
import ProfileContainer from "./compontents/Profile/ProfileContainer";
import UsersContainer from "./compontents/Users/UsersContainer.tsx";
import { initialize } from './redux/app_reducer';
import HeaderContainer from './compontents/Header/HeaderContainer';
const DialogsContainer = React.lazy(() => import('./compontents/Dialogs/DialogsContainer'));

const App = (props) => {
  const catchAllUnhandledErrors = (event) => {
    alert(`UNHANDLED PROMISE REJECTION: ${event.reason}`)
    console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
  }

  useEffect(() => {
    props.initialize()
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
    return () => {window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);}
  }, [])

  if (!props.initialized) {
    return <Preloader />
  }
  return (
    <div className="all-wrapper">
      <div className="space">
        <div className="h"></div>
        <div className="c"></div>
      </div>
      <div className="app-wrapper">
        <div className="app-wrapper-header">
          <HeaderContainer />
        </div>
        <div className="app-wrapper-navbar">
          <Navbar />
        </div>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs' element={
              <Suspense fallback={<Preloader />} >
                <DialogsContainer />
              </Suspense>} />
            <Route path='/dialogs/:id' element={
              <Suspense fallback={<Preloader />} >
                <DialogsContainer />
              </Suspense>} />
            <Route path='/' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/profile/:id' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
      </div>
      <div className="space">
        <div className="h"></div>
        <div className="c"></div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initialize })(App);