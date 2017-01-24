import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container"> 
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
              <a className="navbar-brand page-scroll" href="#page-top">Touché</a> </div>
            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about" className="page-scroll">소개</a></li>
                <li><a href="#restaurant-menu" className="page-scroll">특징</a></li>
                <li><a href="#portfolio" className="page-scroll">스케줄</a></li>
                <li><a href="#team" className="page-scroll">추천사</a></li>
                <li><a href="#call-reservation" className="page-scroll">갤러리</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}