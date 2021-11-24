import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact />
      </Routes>
    </Router>
  );
}

export default App;