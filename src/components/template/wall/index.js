import React, { Component } from 'react';

import Navbar from '../../organism/Navbar';
import Header from '../../organism/Header';
import About from '../../organism/About';
import Charateristic from '../../organism/Characteristic';
import Schedule from '../../organism/Schedule';
import Footer from '../../organism/Footer';

export default class Wall extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Charateristic />
        <Schedule />
        <Footer />
      </div>
    );
  }
}
