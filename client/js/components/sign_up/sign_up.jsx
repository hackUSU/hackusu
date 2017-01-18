"use strict";

import React                    from 'react';
import assets                   from '../../libs/assets';
import Navbar                   from '../common/nav_bar';
import Materialize              from 'materialize-css';

export default class SignUp extends React.Component {

  render(){

    const styles = {
      iframe:{
        width: "100%",
        height: "1000px",
        overflow: "hidden",
        margin: "-250px auto"
      },
      notice: {
        color: "#FFF",
        textAlign: "center",
        width: "790px",
        margin: "70px auto",
        position: "relative"
      },
      noticeMobile: {
        color: "#FFF",
        textAlign: "center",
        width: "790px",
        margin: "70px auto",
        position: "relative",
        height: "110px"
      }
    }

    let notice = (window.innerWidth >= 1000) ? <div style={ styles.notice }>
                        Welcome to our new site!<br/>
                        We are so excited about this new look and we're working hard to get all our events, announcements, and pictures up!
                        As for right now we would love for you to join our movement to build the tech culture in Utah!
                        Fill out the form below and we'll send you a link to join our slack channel where we are currently posting our announcements, events, job opportunities, etc.

                        <p>If you would like to help us in creating our new site drop us a line once you've joined the slack channel!</p>

                        Thank you!
                      </div> : <div style={ styles.noticeMobile }></div>;

    return(
      <div>
        <Navbar />
        { notice }
        <div style={ styles.iframe }>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdo5KwbKn5ElYTeFvMBj25YvgJxSKZQEavavRVxt7zyP9ji5w/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0">
                    Loading...
          </iframe>
        </div>
      </div>
    );
  }

}
