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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for the 'load' event to detect when the website has finished loading
    window.addEventListener('load', () => {
      setIsLoading(false);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', () => {
        setIsLoading(false);
      });
    };
  }, []);

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
