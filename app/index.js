import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Link, Switch } from 'react-router-dom';
import Button from './button';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import Contact from './contact';
import Home from './home';
import PDF from '../../../Resume/resume-base.pdf';
import './app.css';

var Resume = () => {
  
  var loadError = (error) => (
    <div>{error}</div>
  );

  var error = (error) => (
    <div>{error}</div>
  );

  let resumeStyle = {
    alignSelf: 'center'
  }

  return(
  <Fragment>
    <h1>Resume</h1>
    <a href="/resources/resume-base.pdf">
    <Document onLoadError={error} file={PDF}>
      <Page pageNumber={1} style={resumeStyle} />
    </Document>
    </a>
  </Fragment>
  );
}; 

var Projects = () => (
  <Fragment>
    <h1>Projects</h1>
    <ul>
      <li><a href="/fayeboo">Fayeboo</a></li>
      <li><a href="/chatbox">Chat box</a></li>
      <li><a href="/manager">Playlist Manager</a></li>
    </ul>
  </Fragment>
);

var Header = () => {
  const headerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const linkStyle = {
    backgroundColor: 'darkgrey',
    padding: '10px 5px',
    margin: '5px',
    textDecoration: 'none'

  };

  const activeLinkStyle = {
    backgroundColor: 'lightgrey'
  };

  const buttonContainer = {
    maxWidth: '840px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: '1',
  };

  return(
  <div className="app__header__Tf0OO" style={headerStyle}>
    <div className="app__buttonContainer__" style={buttonContainer} >
      <Button dest="/" exact={true} val='Home'></Button>
      <Button dest="/resume" exact={false} val='Resume'></Button>
      <Button dest="/projects" exact={false} val='Projects'></Button>
      <Button dest="/contact" exact={false} val='Contact'></Button>
    </div>
  </div>
  );
};


const WrongPage = () => (
  <div>
     <h1>404 Wrong page</h1>
  </div>
);

var App = () => {
  let mainStyle = {
    width: '800px',
    backgroundColor: '#e8e8e8',
    height: '100%',
    padding: '20px',
  };
  return(
  <div className="app__container__1Y6LO">
    <Header />
    <div style={mainStyle}>
    
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/*' component={WrongPage}/>
    </Switch>
    </div>
  </div>
)};

console.log('here at index.js');
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
