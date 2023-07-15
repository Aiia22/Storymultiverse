import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import MySearch from "./pages/MySearch";
import MyList from "../src/pages/MyList";
import Community from "../src/pages/Community";
import SurpriseMe from "../src/pages/SurpriseMe";
import MyAccount from "../src/pages/MyAccount";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-search" element={<MySearch />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/community" element={<Community />} />
        <Route path="/surprise-me" element={<SurpriseMe />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </Router>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
