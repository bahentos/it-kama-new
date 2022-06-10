import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./compontents/Dialogs/DialogsContainer";
import HeaderContainer from "./compontents/Header/HeaderContainer";
import Navbar from "./compontents/Navbar/Navbar";
import ProfileContainer from "./compontents/Profile/ProfileContainer";
import UsersContainer from "./compontents/Users/UsersContainer";

const App = (props) => {
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
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/dialogs/:id' element={<DialogsContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/profile/:id' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
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

export default App;