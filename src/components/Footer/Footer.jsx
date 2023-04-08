import React from 'react'
import '../styles/footer.css';
import footerLogo from '../../images/dumble.png';

const Footer = () => {
  return (
    <section className="footer-container" data-aos="fade-up" data-aos-duration="2000">
        <div className="footer-logoContainer">
      <span className="fit">FitBody</span>
          <img src={footerLogo} alt="" />
        </div>

        <section className="general-linkContainer">
        <section className="footer-links">
          <li className="quick-links">Company</li>
          <li>our program</li>
          <li>our plan</li>
          <li>Become a mentor</li>
        </section>

        <section className="footer-links">
          <li className="quick-links">Quick link</li>
          <li>About us</li>
          <li>Contact us </li>
          <li>Support</li>
        </section>

        <section className="footer-links">
          <li className="quick-links">NewsSettler</li>
          <li>Join us</li>
          <li>subscribe to our blog</li>
          <li>Become a mentor</li>
        </section>

        </section>
    </section>
  )
}

export default Footer