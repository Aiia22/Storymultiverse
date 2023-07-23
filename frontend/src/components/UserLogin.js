import React, { useState } from "react";
import axios from "axios";

//************  Start UserLogin component ************
const UserLogin = () => {
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
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      // This will handle  successful response from  backend (e.g., show success message or handle authentication token)
      console.log(response.data); // to be modified  based on  backend response
    } catch (error) {
      // This will handle error (e.g., show error message)
      console.error(error.response.data); //to be modified  based on  backend response
    }
  };
  //Return login form
  return (
    <div className="login-container">
      <h3>Sign In</h3>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
//************  Start UserLogin component ************

//Export component
export default UserLogin;
