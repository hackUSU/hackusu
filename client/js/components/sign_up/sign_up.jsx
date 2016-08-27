"use strict";

import React                    from 'react';
import { Parallax, Background } from 'react-parallax';
import assets                   from '../../libs/assets';
import Navbar                   from '../common/nav_bar';
import Materialize              from 'materialize-css';

export default class SignUp extends React.Component {
  constructor(props){
    super(props)

    var slackChannels = [
      "C03EP9ETJ",    // announcements
      "C08P0N7UL",    // free-food
      "C050FQ4L0",    // game-design
      "C0790NPHQ",    // gaming
      "C08P3SV8A",    // gifs
      "C0B8T7U9J",    // hacker-lounge
      "C0ADF74RZ",    // help
      "C0BPE4E1X",    // jobs
      "C03EP9ETY",    // random
      "C0AB0LGV9"     // webdev
    ];
    // https://script.google.com/macros/s/AKfycbw0NTCtTKlJ1Kt4DYKpuDxoGMhHP4FmP-USUPyOoPYQ17Tx9v0/exec
  }

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
                height="540px"
                frameborder="0"
                marginheight="0"
                marginwidth="0">
                  Loading...
        </iframe>
      </div>
    );
  }

}
