import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Admin page</h1>
        <h3>Please login to more detail</h3>
      </>
    );
  }
}

export default Home;
