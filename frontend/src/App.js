import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './login'
import './App.css'
import Navbar from './navigation/Navbar.js';
import CategoriesPage from './CategoriesPage.js';
import ContactPage from './ContactPage.js';

import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/Home"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App