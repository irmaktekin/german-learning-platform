import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './navigation/Navbar.js';
import CategoriesPage from './CategoriesPage.js';
import ContactPage from './ContactPage.js';
import Register from './Register.js';

import Login from './login';
import { useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <AppContent loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} setEmail={setEmail} />
      </BrowserRouter>
    </div>
  );
}

const AppContent = ({ loggedIn, setLoggedIn, email, setEmail }) => {
const location = useLocation(); // Track current location



  return (
    <>
      {/* Only show the Navbar if the current path is NOT '/login' */}
      {location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}

      <Routes>
        {/* Route for Login */}
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />

        {/* Routes for other pages */}
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<Register />} />

        {/* Default route can go to home */}
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;