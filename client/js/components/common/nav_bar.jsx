"use strict";

import React                    from 'react';
import SideNav                  from 'react-simple-sidenav';
import Materialize              from 'materialize-css';
import assets                   from '../../libs/assets';

export default class Navbar extends React.Component {
 constructor(props){
     super(props)

     var sideNavitems = [
       <li className="top-nav-item text-white">Home</li>,
       <li className="top-nav-item text-white">Events</li>,
       <li className="top-nav-item text-white">Projects</li>,
       <li className="top-nav-item text-white">Sponsors</li>,
       <li className="top-nav-item text-white">About</li>,
       <li className="top-nav-item text-white">Join</li>
     ]

     this.state = {sideNavitems, showNav: false};

     this.toggleNav = this.toggleNav.bind(this);
 }

 toggleNav(){
   var showNav = (this.state.showNav) ? false : true;
   this.setState({showNav});
 }

 render(){
   return (
     <div className="navbar-fixed">
       <nav className="black" role="navigation">
         <div className="nav-wrapper container">
           <a id="logo-container" href="#" className="brand-logo"><img src={"\." + assets('./images/logo_main.png')} alt="hackUSU" style={{height: '55px'}}/></a>
           <ul className="right hide-on-med-and-down">
             <li className="top-nav-item text-white">Home</li>
             <li className="top-nav-item text-white">Events</li>
             <li className="top-nav-item text-white">Projects</li>
             <li className="top-nav-item text-white">Sponsors</li>
             <li className="top-nav-item text-white">About</li>
             <li className="top-nav-item text-white">Join</li>
           </ul>
         </div>

         <a data-activates="nav-mobile"
            className="button-collapse"
            style={{position: 'absolute', top: '5px', left: '15px'}}
            onClick={(e)=>{e.preventDefault(); this.toggleNav();}}>
               <i className="material-icons grey">menu</i>
         </a>

         <SideNav showNav={ this.state.showNav }
                  onHideNav={ ()=>{this.setState({showNav: false});} }
                  title={<div className="black"><img src={"\." + assets('./images/logo_main.png')} alt="hackUSU" style={{ height: '30px' }}/></div>}
                  titleStyle={{ backgroundColor: '#000' }}
                  itemStyle={{ width: '100%', padding: '0px' }}
                  items={this.state.sideNavitems} />
       </nav>
       <br/>
     </div>
   );
 }
}
