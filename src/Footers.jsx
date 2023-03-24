import React from 'react'
import './Footers.css';

function Footers() {
    return (
        <footer>
          <div class="footer-container">
            <div class="logo-container">
              <img src="aiti.png" alt="Logo" />
            </div>
            <div class="nav-container">
              <h3 className="h3">Navigation</h3>
              <ul>
                <li>About Us</li>
                <li>Training</li>
                <li>Research</li>
                <li>Consultancy</li>
                <li>News</li>
              </ul>
            </div>
            <div class="contact-container">
              <div class="call-us-on-container">
                <h3 className="h3">Call Us On</h3>
                <ul>
                  <li>Accra: +233 556 660 355</li>
                  <li>Sunyani: +233 201 505 489</li>
                  <li>Bolgatanga: +233 201 505 407</li>
                </ul>
              </div>
              <div class="accra-centre-container">
                <h3 className="h3">Accra Centre</h3>
                <ul>
                  <li>Haile Salassie St., opp. Council of State <br/>
                      PMB, State House <br/>
                      Accra - Ghana
                  </li>
                  <li>Digital Address: GA-079-3146</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="copyright">
                &copy; natmensah60@gmail.com
          </div>
        </footer>
      )
}

export default Footers
