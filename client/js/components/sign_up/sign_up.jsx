"use strict";

import React                    from 'react';
import { Parallax, Background } from 'react-parallax';
import assets                   from '../../libs/assets';
import Navbar                   from '../common/nav_bar';
import Materialize              from 'materialize-css';

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
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdo5KwbKn5ElYTeFvMBj25YvgJxSKZQEavavRVxt7zyP9ji5w/viewform?embedded=true"
                width="100%"
                height="600px"
                frameborder="0"
                marginheight="0"
                marginwidth="0">
                  Loading...
        </iframe>
      </div>
    );
  }

}
