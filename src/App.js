import './App.css';
import LoginPage from './Components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LandingPage from './Components/LandingPage';
import React, { useState } from 'react';
import LoadingPage from './Components/LoadingPage';
import Video from './Components/Video';
import ContactUs from './Components/ContactUs';
import Plot from './Components/Plot';
import CreatePost from './Components/CreatePost';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {

    setIsLoading(false);
  },1000)

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
        <Route path="/content" element={<Plot/>} />
        <Route path="/createpost" element={<CreatePost/>} />
      </Routes>
      }

    </div>
  );
}

export default App;
