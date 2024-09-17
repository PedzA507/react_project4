import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPass from './components/ForgotPass';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainAdmin from './components/MainAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} /> 
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/forgotpass' element={<ForgotPass />} />
        <Route exact path='/mainadmin' element={<MainAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
