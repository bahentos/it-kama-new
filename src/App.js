import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./compontents/Dialogs/Dialogs";
import Header from "./compontents/Header/Header";
import Navbar from "./compontents/Navbar/Navbar";
import Profile from './compontents/Profile/Profile';

const App = (props) => {
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
            <Route path='/dialogs/' element={<Dialogs state={props.state}  addMessage={props.addMessage} update_new_message_text={props.update_new_message_text} />} />
            <Route path='/dialogs/:id' element={<Dialogs state={props.state} addMessage={props.addMessage} update_new_message_text={props.update_new_message_text} />} />
            <Route path='/profile' element={<Profile state={props.state} update_new_post_text={props.update_new_post_text} addPost={props.addPost}  />} />
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