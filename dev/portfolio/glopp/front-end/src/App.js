import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Settings from './pages/Settings';

function App() {
    return (
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />  
            <Route path='/Search' element={<Search />} />
            <Route path='/Settings' element={<Settings />} /> 
          </Routes>
        </div>
      );
    }
export default App;
