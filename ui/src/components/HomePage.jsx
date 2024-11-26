import SearchLocation from "./SearchLocation.jsx";
import SuggestedLocations from "./SuggestedLocations.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/bbaf850c-4043-468a-a5bd-05645f4a8c41.webp";

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
          <h1 className="main-heading">User Home and Location Search</h1>
          <SearchLocation />
          <div className="suggestion-dashboard">
            <SuggestedLocations />
          </div>
        </div>
      )}
      {loading && (
        <div className="session-check-wrapper">
          {!sessionIDFailure ? (
            <div>Validating credentials...</div>
          ) : (
            <>
              <h1>Oops!</h1>
              <h3>
                <Link to="/existing_user">Log in</Link> or{" "}
                <Link to="/">Create account</Link>
              </h3>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default HomePage;
