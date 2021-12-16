import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CreateNote from './components/CreateNote';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/notes" element={<Notes />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </Router>   
  )}

export default App;