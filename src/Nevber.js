import React from 'react';
import './Nevber.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Nevber(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.black} bg-${props.black}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to='/'>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="About.js">About</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="Darkstyle.js">{props.sq}</Link>
        </li> */}
      </ul>

      <form className="d-flex">
      <input className= "form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      {/* single Mood button */}
      {/* <div className={`form-check form-switch text-${props.blue==='white'? 'blue' : 'black'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleBluemode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">BlueMode
        </label>
        </div> */}

          <div className={`toggle-theme-wrapper-${props.crimson==='light'? 'crimson' : 'black'}`}>
                <span className="svg">☀️</span>
                <label className="toggle-theme" htmlFor="checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    onClick={props.toggledrkmode}
                  />
                  <div className="slider round"></div>
                </label>
                <span className="svg">🌒</span>
              </div>

      {/* <div className={`form-check form-switch text-${props.crimson==='light'? 'crimson' : 'black'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleCsmode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">CrimsonMode
        </label>
        </div> */}
      {/* <div className={`form-check form-switch text-${props.black==='white'? 'black' : 'black'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleBlackmode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.black==='light'?'black':'white'}}>DrakMode
        </label>
        </div> */}
    </div>
  </div>
</nav>
  );
};

Nevber.propTypes = {title: PropTypes.string, sq: PropTypes.string,};

Nevber.defaultProps = {
  title: 'Set title here',
  sq: 'AS/Q text here'
};

