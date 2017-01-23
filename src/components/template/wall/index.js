import React, { Component } from 'react';

import img from '../../../assets/img/intro-bg.jpg'

export default class Wall extends Component {
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
        <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="intro-text">
                    <h1>문부성 오리엔테이션</h1>
                    <p>재미 / 친목 / 정보를 한눈에!</p>
                    <a href="#about" className="btn btn-custom btn-lg page-scroll">참가하기</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 ">
                <div className="about-img"><img src={img} className="img-responsive" alt="" /></div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>문부성 오리엔테이션이란?</h2>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                  <h3>Awarded Chefs</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>
    );
  }
}
