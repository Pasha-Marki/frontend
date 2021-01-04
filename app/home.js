import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';


const hiddenLinkStyle= {
  textDecoration: 'none',
  color: 'inherit',
  textWeight: 'normal',

}

const HomePage = () => (

  <Fragment>
    <h1>Pasha Marki</h1>
    <p>Welcome to my personal website. I graduated from the <a style={hiddenLinkStyle}>University of Redlands</a> with a B.S. in Physics and a minor in Math. I spent two years at <a href="https://www.shiphawk.com" target="_blank" rel="noopener noreferrer" style={hiddenLinkStyle}>Shiphawk</a> as a fullstack developer working on a React frontend and a Ruby on Rails with Postgres backend.</p>
  </Fragment>

);
export default HomePage;
