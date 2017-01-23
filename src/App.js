import React, { Component } from 'react';
import logo from './logo.svg';

import './templateTouche/css/bootstrap.css';
import './templateTouche/css/style.css';
import './App.css';

import Wall from './components/template/wall'

export default class App extends Component {
  render() {
    return (
      <Wall />
    );
  }
}
