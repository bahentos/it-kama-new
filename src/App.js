import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./compontents/Dialogs/Dialogs";
import Header from "./compontents/Header/Header";
import Navbar from "./compontents/Navbar/Navbar";
import Profile from './compontents/Profile/Profile';
import Test from "./compontents/Test/Test";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-wrapper-header">
        <Header />
      </div>
      <div className="app-wrapper-navbar">
        <Navbar />
      </div>
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/dialogs' element={<Dialogs/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </div>
    </div>
  )
};

export default App;