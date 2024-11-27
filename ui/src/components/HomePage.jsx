import SearchLocation from "./SearchLocation.jsx";
import SuggestedLocations from "./SuggestedLocations.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/bbaf850c-4043-468a-a5bd-05645f4a8c41.webp';
import RocketLogo from '../assets/RocketLogo.webp'
import '../stylesheets/HomePage.css'

import "../stylesheets/App.css";

function HomePage() {
  const [sessionIDFailure, setSessionIDFailure] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSessionID = async () => {
      let response = await fetch("http://localhost:3000/users/session_check", {
        method: "GET",
        credentials: "include"
      })
      response = await response.json();
      response?.sessionEmail ? setLoading(false) : setSessionIDFailure(true);
    };
    setTimeout(checkSessionID, 3000)
  }, []);

  return (
    <>
      {!loading && !sessionIDFailure && (
        <div className="App">
          <h1 className="main-heading">
            <img
              src={RocketLogo}
              alt="Rocket Logo"
              className="logo"
            />
                  'Adventure is out there!'
      </h1>
          <SearchLocation />
          <div className="suggestion-dashboard">
            <SuggestedLocations />
          </div>
        </div>
      )}
      {loading && (
        <div className="session-check-wrapper">
          {!sessionIDFailure ? (
            <div className = "validating">Validating credentials...</div>
          ) : (
            <div className = "you-must-log-in">
              <h1>Oops!</h1>
              <h3>
                <Link to="/existing_user" className = "existing-user-link">Log in</Link> or{" "}
                <Link to="/" className = "existing-user-link">Create account</Link>
              </h3>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default HomePage;
