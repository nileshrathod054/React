import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar.In";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";

import axios from "axios";

const App = () => {
  const baseURL = "localhost:8890/shop/";
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  
  if (!post) return null;

  const handleDelete = (id) => {
    axios.delete(`localhost:8890/shop/${id}`);
    window.location.reload();
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/> } />
        <Route exact path="/about" element={<About/> } />
        <Route exact path="/contact" element={<Contact/> } />
        <Route
          exact
          path="/shop"
          element={<Shop post={post} handleDelete={handleDelete} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
