import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//************  Start UserLogin component ************
const UserLogin = () => {
  const router = useNavigate();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userForm;

  // Function to handle input change
  const handleFormChange = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // This const will make a call to  API endpoint to send login credentials to backend
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // This will handle  successful response from  backend (e.g., show success message or handle authentication token)
      console.log(response.data); // to be modified  based on  backend response
      if (response.data.status === 200) {
        //TO BE MODIFIED TO MATCH RESPONSE DATA
        router("/my-search");
      }
    } catch (error) {
      // This will handle error (e.g., show error message)
      console.error(error.response.data); //to be modified  based on  backend response
    }
  };

  //Return login form
  return (
    <div className="login-container">
      <div className="heading-login">
        <h2>Sign in to your account</h2>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleFormChange}
              required
            />
          </div>
          <button
            style={{
              width: "30%",
              marginTop: "30px",
            }}
            type="submit"
          >
            Login
          </button>
        </form>

        <p>
          Not a member ? <a href="/register">Create an account here</a>{" "}
        </p>
      </div>
    </div>
  );
};
//************  Start UserLogin component ************

//Export component
export default UserLogin;
