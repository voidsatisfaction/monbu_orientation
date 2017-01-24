import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container text-center">
          <div className="col-md-4">
            <h3>Address</h3>
            <div className="contact-item">
              <p>4321 California St,</p>
              <p>San Francisco, CA 12345</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Opening Hours</h3>
            <div className="contact-item">
              <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
              <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <p>Phone: +1 123 456 1234</p>
              <p>Email: info@company.com</p>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center copyrights">
          <div className="col-md-8 col-md-offset-2">
            <div className="social">
              <ul>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
              </ul>
            </div>
            <p>&copy; 2016 Touché. All rights reserved. Designed by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a></p>
          </div>
        </div>
      </div>
    );
  }
}