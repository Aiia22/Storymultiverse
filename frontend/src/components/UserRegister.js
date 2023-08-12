import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// **** import axios *************/  ==> for DB data retrieval
import userData from "../data/userData.json"; // ==> using local data until DB fixed

// ******* Import style ****/
import "../styles/CSS/login.css";

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

  // ==> Handle input form
  const handleFormChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  //********* logic that use Database data *********************/
  // ===>  Handle submit form
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // ==>  Call API endpoint to send credentials
  //     const response = await axios.post("http://localhost:3000/api/register", {
  //       userForm,
  //     });

  //     // ===> Handle  successful post request

  //     if (response.data.status === 200) {
  //       alert("Your account has been created successfully.");
  //       router("/my-search");
  //     }
  //   } catch (error) {
  //     console.error(error.response.data);
  //     alert("Oups something went wrong , please try again later .");
  //     router("/my-search");
  //   }
  // };

  //********* logic that use the json *********************/

  // ==> Handle input form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // ==> Verify if email already used
    const currentUser = userData.find((user) => user.userEmail === email);
    if (currentUser) {
      alert("This email is already registered.");
      return;
    }

    // ===> Simulate user registration
    const newUser = {
      ...userForm,
      userEmail: email,
    };

    // ==> Simulated post route to add new user
    userData.push(newUser);

    alert("Your account has been created successfully.");
    router("/my-search");
  };

  return (
    <div className="login-container">
      <h3>Create an account in a single step !</h3>

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
        <button className="logBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
