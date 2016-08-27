"use strict";

import React                    from 'react';
import { Link }                 from 'react-router';
import SideNav                  from 'react-simple-sidenav';
import Materialize              from 'materialize-css';
import assets                   from '../../libs/assets';

export default class Navbar extends React.Component {
  constructor(props){
    super(props)

    var sideNavitems = [
      <Link className="top-nav-item text-white" to={`/`}>Home</Link>,
      <Link className="top-nav-item text-white" to={`/signup`}>Events</Link>,
      <Link className="top-nav-item text-white" to={`/signup`}> Projects</Link>,
      <Link className="top-nav-item text-white" to={`/signup`}>Sponsors</Link>,
      <Link className="top-nav-item text-white" to={`/signup`}>About</Link>,
      <Link className="top-nav-item text-white" to={`/signup`}>Join</Link>
    ]

    this.state = { sideNavitems, showNav: false };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    var showNav = (this.state.showNav) ? false : true;
    this.setState({showNav});
  }

  render(){

    return (
      <div className="navbar-fixed" style={{ top: '0px', position: 'absolute' }}>
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo"><img src={"\." + assets('./images/logo_main.png')} alt="hackUSU" style={{ height: '55px', paddingTop: '10px' }}/></a>
            <ul className="right hide-on-med-and-down" style={{ position:'absolute', left: '200px', width: '825px' }}>
              <li><Link className="top-nav-item text-white" to={`/`}>Home</Link></li>
              <li><Link className="top-nav-item text-white" to={`/signup`}>Events</Link></li>
              <li><Link className="top-nav-item text-white" to={`/signup`}>Projects</Link></li>
              <li><Link className="top-nav-item text-white" to={`/signup`}>Sponsors</Link></li>
              <li><Link className="top-nav-item text-white" to={`/signup`}>About</Link></li>
              <li><Link className="top-nav-item text-white" to={`/signup`}>Join</Link></li>
            </ul>
          </div>

          <a  data-activates="nav-mobile"
              className="button-collapse mobile-nav-style"
              style={{ position: 'absolute' }}
              onClick={(e)=>{e.preventDefault(); this.toggleNav();}}>
                <i className="material-icons">menu</i>
          </a>

          <SideNav  showNav={ this.state.showNav }
                    onHideNav={ ()=>{this.setState({showNav: false});} }
                    title={<div className="white"><img src={"\." + assets('./images/logo_main.png')} alt="hackUSU" style={{ margin: 'auto', width: '300px' }}/></div>}
                    titleStyle={{ backgroundColor: '#FFF' }}
                    itemStyle={{ width: '100%', padding: '0px' }}
                    items={this.state.sideNavitems} />
        </nav>
        <br/>
      </div>
    );
  }
}
