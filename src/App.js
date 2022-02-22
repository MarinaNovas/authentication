import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './css/style.css';
import './css/fonts-style.css';
import SiteHeader from './components/SiteHeader';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Authentication from './components/Authentication';

function App() {
  return (
    <Router>
      <div className="app">
        <SiteHeader/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route exact path='/login' element={<Authentication showAuthentication={true}/>} />
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
