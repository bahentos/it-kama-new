import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./compontents/Dialogs/Dialogs";
import Header from "./compontents/Header/Header";
import Navbar from "./compontents/Navbar/Navbar";
import Profile from './compontents/Profile/Profile';

const App = (props) => {
  let dialogsProps = 'dialogsPage={props.state.dialogsPage}'
  return (
    <div className="all-wrapper">
      <div className="space">
        <div className="h"></div>
        <div className="c"></div>
      </div>
      <div className="app-wrapper">
        <div className="app-wrapper-header">
          <Header />
        </div>
        <div className="app-wrapper-navbar">
          <Navbar />
        </div>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/' element={
              <Dialogs 
                addMessage={props.addMessage}
                update_new_message_text={props.update_new_message_text}
                dialogsPage={props.state.dialogsPage}/>
              } />
            <Route path='/dialogs/:id' element={
              <Dialogs 
              addMessage={props.addMessage}
              update_new_message_text={props.update_new_message_text}
              dialogsPage={props.state.dialogsPage}/>
            } />
            <Route path='/profile' element={
              <Profile 
              addPost={props.addPost} 
              update_new_post_text={props.update_new_post_text} 
              profilePage={props.state.profilePage}/>
              } />
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