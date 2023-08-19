import React from 'react'
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Notfound from './pages/Notfound';
import Layout from './component/Layout';
import Aboutus from './pages/AboutUs';
import Contactus from './pages/ContactUs';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <> 
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs/>} /> 
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
   
     </>
  );
}

export default App;
