import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Main from './components/Main';
import PricesTwoOptions from './components/PricesTwoOptions';
import BookingForm from './components/BookingForm'
import Aszf from './components/Aszf';
import AboutUs from './components/AboutUs';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Navbar />, <Main />, <PricesTwoOptions />]} />
        <Route path="/foglalas" element={[<Navbar />, <BookingForm />]} />
        <Route path="/aszf" element={[<Navbar />, <Aszf />]} />
        <Route path="/rolunk" element={[<Navbar />, <AboutUs />]} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
