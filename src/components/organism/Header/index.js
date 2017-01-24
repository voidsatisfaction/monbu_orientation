import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}