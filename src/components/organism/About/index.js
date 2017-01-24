import React, { Component } from 'react';

import img from '../../../assets/img/intro-bg.jpg'

export default class About extends Component {
  render() {
    return (
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
    );
  }
}