import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//******* Import pages *******/
import Home from "../src/pages/Home";
import MySearch from "../src/pages/Mysearch";
import MySearchResult from "../src/pages/MySearchResult";
import MySearchSubResult from "../src/pages/MySearchSubResult";
import MyList from "../src/pages/MyList";
import Community from "../src/pages/Community";
import SurpriseMe from "../src/pages/SurpriseMe";
import MyAccount from "../src/pages/MyAccount";
import Support from "../src/pages/Support";
import Login from "../src/pages/Login";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import MySelectedResult from "./pages/MySelectedResult";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-search" element={<MySearch />} />
        <Route path="/my-search-result" element={<MySearchResult />} />
        <Route path="/my-search-detail" element={<MySearchSubResult />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/community" element={<Community />} />
        <Route path="/surprise-me" element={<SurpriseMe />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-selected-item/:id" element={<MySelectedResult />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
