import loginGraphic from "../assets/possible_login_graphic.jpg";
import {useState} from 'react'
import "../stylesheets/Login.css";

const Login = ({ setUserAuth }) => {

const [formValues, setFormValues] = useState({
  firstname: '',
  lastname: '',
  email: '',
  password: ''
})




  const handleCreateUser = async () =>{
    let response = await fetch('http://localhost:3000/users/create', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues)

    })
    response = await response.json()
    console.log('This is the response on the frontend:', response)
    response.authenticate === true ? setUserAuth(true) : setUserAuth(false)
  }

  const handleFormInputs = (event) =>{
    const {name, value} = event.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }





  return (
    <div className="login-wrapper">
      <div className="login-input">
        <h1>Create new account</h1>
        <h3>Already a member? <span className = "existing-user-link">Log in</span></h3>
        <div className="input-container-wrapper">
          <div className="first-last-container">
            <div className="input-container">
              <label htmlFor="firstname">First name</label>
              <input type="text" name="firstname" id="first-name" autoComplete="one-time-code" onChange={handleFormInputs}></input>
            </div>
            <div className="input-container">
              <label htmlFor="lastname">Last name</label>
              <input type="text" name="lastname" id="last-name" autoComplete="one-time-code" onChange={handleFormInputs}></input>
            </div>
          </div>
          <div className="input-container" id="email-field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" autoComplete="one-time-code" onChange={handleFormInputs}></input>
          </div>
          <div className="input-container" id="password-field">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" autoComplete="one-time-code" onChange={handleFormInputs}></input>
          </div>
        </div>
        <div className="create-account-btn">
          <button type="button" onClick={handleCreateUser}>Create Account</button>
        </div>
      </div>
      <div className="login-img">
        <div className="img-container">
          <img src={loginGraphic} alt="travel pic"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
