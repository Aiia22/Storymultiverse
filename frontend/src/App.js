import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//******* Import pages *******/
import Home from "../src/pages/Home";
import MySearch from "../src/pages/Mysearch";
import MySearchResult from "../src/pages/MySearchResult";
import MySearchSubResult from "../src/pages/MySearchSubResult";
import MyList from "../src/pages/MyList";
import Community from "../src/pages/Community";
import MyAccount from "../src/pages/MyAccount";
import Support from "../src/pages/Support";
import Login from "../src/pages/Login";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import MySelectedResult from "./pages/MySelectedResult";
import Register from "./pages/Register";

// ******* Import auth component to protect route whorequired user to be logged in *****/
import AuthComponent from "./components/authComponent";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-search" element={<MySearch />} />
        <Route path="/my-search-result" element={<MySearchResult />} />
        <Route path="/my-search-detail" element={<MySearchSubResult />} />

        <Route
          path="/my-list"
          element={<AuthComponent childComponent={<MyList />} />}
        />
        <Route
          path="/community"
          element={<AuthComponent childComponent={<Community />} />}
        />
        <Route
          path="/my-account"
          element={<AuthComponent childComponent={<MyAccount />} />}
        />
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
