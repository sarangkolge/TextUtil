import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <>
            <nav className={`navbar navbar-expand-lg navba-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Forminput" style={{color: props.mode==='dark'?'white':'#042743'}}>TextUtil</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Forminput" style={{color: props.mode==='dark'?'white':'#042743'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Howtouse" style={{color: props.mode==='dark'?'white':'#042743'}}>How to Use</Link> 

        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Contact" style={{color: props.mode==='dark'?'white':'#042743'}}>Contact Us</Link>
        </li>
        
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>             
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>

</nav>

            </>
        </div>
    )
}





