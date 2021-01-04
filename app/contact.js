"use strict";

import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

const linkStyle= {
  textDecoration: 'none',
  color: 'black',
  textWeight: 'normal',
  ':hover':{
    textDecoration: 'underline',
    cursor: 'pointer',
  }
}

class ContactPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      copied: false
    };
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  timeOut() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(false);
      }, 2000);
    });
  }

  async copyToClipboard() {
    var copyText = document.getElementById("copy");
    copyText.select();
    document.execCommand("copy");
    this.setState({copied: true});
    var result = await this.timeOut();
    this.setState({copied: result});
  }

  render(){

  return(
  <Fragment>
    <h1>Contact Pasha</h1>
    <ul>
      <li>Email:<a key="copy"><span title="Copy to Clipboard" onClick={this.copyToClipboard} style={linkStyle}>PashaRMarki@gmail.com</span></a></li>
      {this.state.copied && (<Fragment><p>Copied to your clipboard!</p></Fragment>)}
      <li>LinkedIn: <a style={linkStyle} key="linkin" href="https://www.linkedin.com/in/pasha-marki-228500144/">Pasha Marki</a></li>
      <li>Github: <a style={linkStyle} key="github"  href="https://github.com/Pasha-Marki">Pasha-Marki</a></li>
    </ul>
    <input id="copy"  type="text" value="PashaRMarki@gmail.com" onChange={()=>{}} hidden  />
  </Fragment>

  );
  }
}
export default Radium(ContactPage);
