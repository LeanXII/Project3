import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import HomePage from "./components/HomePage.jsx";


import "./stylesheets/App.css";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
