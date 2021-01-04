import React from 'react';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';
import './app.css';
import PathList from './paths.json';

let Button = (props) => {

  let buttonStyle = {
    transition: "color 1s",
    color: "#e8e8e8",
    fontSize: '30px',
    fontWeight: 'bold',
    padding: '15px',
    marginRight: '3px',
    marginLeft: '3px',
    textDecoration: 'none',
    ':hover': {
      color: 'white',
    }
  };

  return(
    <NavLink to={props.dest} style={{textDecoration: 'none'}}>
      <div style={buttonStyle} >
        {props.val}
      </div>
    </NavLink>

  );

}

export default Radium(Button);
