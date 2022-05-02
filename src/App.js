import "./App.css";
import Header from "./compontents/Header/Header";
import Navbar from "./compontents/Navbar/Navbar";
import Profile from './compontents/Profile/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
