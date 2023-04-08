import React from 'react';
import '../styles/header.css';
import  logo from '../../images/dumble.png';


 export default function Header() {
   const handleClick = () => {
      const nav = document.querySelector(".open-menu");
      nav.classList.add("active")
      

   }

   const handleClicke = () => {
     
      const back = document.querySelector(".open-menu");
      back.classList.remove("active");

   }
  return (

    <section className='header-container'>
     <div className="logo-container">
        <h4 className="logo-desc">fitbody</h4>
        <img src={logo} alt="" />
     </div>
     <section className="open-bar">
      <span className="open-icon" onClick={handleClick}><i className="ri-menu-line"></i></span>
     </section>

     <div className="open-menu">
      <section className="close-menu">
         <span className="closeMenu"  onClick={handleClicke}><i className="ri-close-line"></i></span>
      </section>
     <section className="nav-links-container">
        <a href="#home" className="nav-links">home</a>
        <a href="#schedule" className="nav-links">schedule</a>
        <a href="#classes" className="nav-links">classes</a>
        <a href="#pricing" className="nav-links">pricing</a>
        <a href="#testimonies" className="nav-links">Testimonies</a>
     </section>
     <section className="button-container">
        <a href="#register-btn" className="register-btn">register</a>
     </section>
     </div>
    </section>
  )
}


