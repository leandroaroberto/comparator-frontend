import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'

export default function App() {

  return (
    <Router>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />        
      </Routes>
    </Router>
  );
}