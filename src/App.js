import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TotalLoginPage from './LoginPage';
import TotalhomePage from './homepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TotalLoginPage/>}/>
        <Route path="/home" element={<TotalhomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;