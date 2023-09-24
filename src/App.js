import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LandingPage from './Components/LandingPage';
import React, { useState, useEffect } from 'react';
import LoadingPage from './Components/LoadingPage';
import Video from './Components/Video';
import ContactUs from './Components/ContactUs';
import Navbar from './Components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {

    setIsLoading(false);
  },2500)

  

  return (
    <div className="App">
      {/* it works */}
      {isLoading ?
        <LoadingPage /> : null}

      
      {!isLoading && <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/travelooVideo" element={<Video />} />
        <Route path="/contactUs" element={<ContactUs/>} />
      </Routes>
      }

    </div>
  );
}

export default App;
