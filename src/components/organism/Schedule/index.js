import React, { Component } from 'react';

export default class Schedule extends Component {
  render() {
    return (
<div id="restaurant-menu">
  <div className="section-title text-center center">
    <div className="overlay">
      <h2>스케줄</h2>
      <hr />
      <p>오리엔 테이션의 대략적인 스케줄 입니다.</p>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <div className="menu-section">
          <h2 className="menu-section-title">첫째날</h2>
          <hr />
          <div className="menu-item">
            <div className="menu-item-name"> 양평역 앞 집합 </div>
            <div className="menu-item-price"> $35 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name"> Delicious Dish </div>
            <div className="menu-item-price"> $30 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name"> Delicious Dish </div>
            <div className="menu-item-price"> $30 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name"> Delicious Dish </div>
            <div className="menu-item-price"> $30 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6">
        <div className="menu-section">
          <h2 className="menu-section-title">둘째날</h2>
          <hr />
          <div className="menu-item">
            <div className="menu-item-name"> Delicious Dish </div>
            <div className="menu-item-price"> $45 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name"> Delicious Dish </div>
            <div className="menu-item-price"> $30 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name"> Delicious Dish </div>
            <div className="menu-item-price"> $30 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name"> Delicious Dish </div>
            <div className="menu-item-price"> $30 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}