import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auction from './assets/components/Auction.jsx'
import Sell from './assets/components/Sell.jsx'
import About from './assets/components/About.jsx'
import Contact from './assets/components/Contact.jsx'
import  Login from './assets/components/Login.jsx'
import Signup from './assets/components/Signup.jsx'
import ForgotPassword from './assets/components/ForgotPassword.jsx'

createRoot(document.getElementById('root')).render( 
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/auctions" element={<Auction />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
  </BrowserRouter>
)
