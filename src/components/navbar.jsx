import React, { Component } from 'react';

class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className="navbar navbar-light bg-light">
        <a href="#3" className="navbar-brand">
          <img src="https://picsum.photos/id/806/30/30.jpg" className="d-inline-block align-top" alt="" width="30" height="30" loading="lazy"/> Navbar
        </a>
        <form action="" className="form-inline">
          <input type="search" className="form-control mr-sm-2" placeholder="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    );
  }
}
 
export default Navbar;