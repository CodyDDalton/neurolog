import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Info from './pages/Info';
import Archive from './pages/Archive';
import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info" element={<Info />}/>
        <Route path="/archive" element={<Archive />}/>
      </Routes>
    </BrowserRouter>
      
  )
}
export default App;