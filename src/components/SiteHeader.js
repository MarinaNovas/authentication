import React from 'react';
import { useState} from 'react';
import {Link} from "react-router-dom";

function SiteHeader(){
  const [themaAppBar,setThemaAppBar]=useState('light');

  return(
    <div className={`header ${themaAppBar}`}>
      <ul className="menu">
        <li className="menu__item">
          <Link to="/" className="menu__item-link" onClick={()=>setThemaAppBar('light')}>Home</Link>
        </li>
        <li className="menu__item">
          <Link to="/dashboard" className="menu__item-link" onClick={()=>setThemaAppBar('dark')}>Dashboard</Link>
        </li>
        <li className="menu__item">
          <a href="/login" className="menu__item-link">Login</a>
        </li>
        <li className="menu__item hover">
          <a href="/#" className="menu__item-link">Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default SiteHeader;