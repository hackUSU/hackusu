"use strict";

import React                    from 'react';
import { Parallax, Background } from 'react-parallax';
import assets                   from '../../libs/assets';
import Navbar                   from '../common/nav_bar';

export default class SignUp extends React.Component {

  render(){
    const styles = {
      iframe:{
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        border: '0',
      }
    }

    return(
      <div>
        <Navbar />
        <br/>
        <iframe style={ styles.iframe } id="typeform-full" width="100%" height="100%" frameBorder="0" src="https://hackustate.typeform.com/to/jtRjbZ" />
      </div>
    );
  }

}
