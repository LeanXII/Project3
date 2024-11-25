import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import HomePage from "./components/HomePage.jsx";
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


import "./stylesheets/App.css";

function App() {
  const [userAuth, setUserAuth] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    userAuth ? navigate('/home') : setUserAuth(false)
  }, [userAuth])

  return (
    <Routes>
      <Route path="/" element={<Login setUserAuth={setUserAuth}/>} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
