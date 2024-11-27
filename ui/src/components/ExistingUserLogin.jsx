import loginGraphic from "../assets/possible_login_graphic.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/ExistingUserLogin.css";

const ExistingUserLogin = ({ setUserAuth }) => {
  const [failedLogin, setFailedLogin] = useState({ value: false, failures: 0 });
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    let response = await fetch("http://localhost:3000/users/existing", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    response = await response.json();
    console.log("This is the response on the frontend:", response);
    response.userAuth === true
      ? setUserAuth(true)
      : setFailedLogin((prevState) => ({
          ...prevState,
          value: true,
          failures: prevState.failures + 1,
        }));
  };

  const handleFormInputs = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-input">
          <h1>Log in</h1>
          <h3>
            First time?{" "}
            <Link to="/" className="existing-user-link">
              Create account
            </Link>
          </h3>
          <div className="input-container-wrapper">
            <div className="input-container-2" id="email-field">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="one-time-code"
                onChange={handleFormInputs}
              ></input>
            </div>
            <div className="input-container-2" id="password-field">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                autoComplete="one-time-code"
                onChange={handleFormInputs}
              ></input>
            </div>
          </div>
          <div className="create-account-btn">
            <button type="button" onClick={handleLogin}>
              Log in
            </button>
          </div>
          {failedLogin.value && (
            <div className="failure-container">
              <p>Failed to login</p>
              <p>x{failedLogin.failures}</p>
            </div>
          )}
        </div>
        <div className="login-img">
          <div className="img-container">
            <img src={loginGraphic} alt="travel pic"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExistingUserLogin;
