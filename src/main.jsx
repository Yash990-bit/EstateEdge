import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auction from './assets/components/auction.jsx'

createRoot(document.getElementById('root')).render( 
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auctions" element={<Auction/>} />
        <Route path="/sell" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/contact" element={<App />} />
      </Routes>
    
  </BrowserRouter>
) 
