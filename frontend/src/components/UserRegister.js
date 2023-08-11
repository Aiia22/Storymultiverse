import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//************  Start UserRegister component ************
const UserRegister = () => {
  const router = useNavigate();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    age: "",
    name: "",
    gender: "male",
    phone: "",
    address: "",
    about: "",
  });

  const { email, password, age, name, gender, phone, address, about } =
    userForm;

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
      const response = await axios.post("http://localhost:3000/api/register", {
        userForm,
      });

      // This will handle  successful response from  backend (e.g., show success message or handle authentication token)
      console.log(response.data); // to be modified  based on  backend response
      if (response.data.status === 200) {
        //TO BE MODIFIED TO MATCH RESPONSE DATA
        alert("Account created successfully !");
        router("/my-search");
      }
    } catch (error) {
      // This will handle error (e.g., show error message)
      console.error(error.response.data); //to be modified  based on  backend response
    }
  };

  //Return register account form
  return (
    <div className="login-container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full name* : </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleFormChange}
            required
          />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="name">Gender* : </label>

          <select name="gender" value={gender} onChange={handleFormChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age* : </label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleFormChange}
            required
          />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="email">Email* :</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Phone number: </label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Address:</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleFormChange}
            required
          />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="about">About: </label>

          <textarea
            rows="4"
            name="about"
            value={about}
            onChange={handleFormChange}
          ></textarea>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
//************  Start UserRegister component ************

//Export component
export default UserRegister;
