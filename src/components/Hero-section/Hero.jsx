import React from "react";
import "../styles/hero.css";
import heroIMG from "../../images/gym-02.png";

function Hero() {
  return (
    <section className="heroSection-container" id="home">
      <section className="heroDesc-container">
        <h1 className="hero-text" data-aos="fade-up" data-aos-duration="1500">
          Exercise is the key to a <span className="hcolor">Healthy</span> Lifestyle
        </h1>
        <p className="hero-text-desc" data-aos="fade-up" data-aos-duration="2000" data-aos-delay ="180">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus,
          quia expedita eos praesentium, id voluptatibus commodi rem, provident
          quis doloremque repellendus vero maiores. Numquam quaerat quidem aut
          amet autem.
        </p>
        <div className="hero-btn-container" data-aos="fade-up" data-aos-duration="2500" data-aos-delay ="280">
            <a href="#getStarted" className="getStarted-btn btn-color">get Started</a>
            <a href="#watch" className="watch-video">watch video</a>
        </div>
      </section>
      <figure className="heroIMg-container">
        .
    
        <div className="circle-hero circle-01"></div>
        <div className="circle-hero circle-02"></div>
        <div className="circle-hero circle-03"></div>
        <div className="square-hero square-01" data-aos="fade-down" data-aos-duration="1500" >
          <i class="ri-service-fill"></i></div>
        <div className="square-hero square-02" data-aos="fade-up" data-aos-duration="1500"></div>
        <div className="square-hero square-03" data-aos="fade-left" data-aos-duration="1500">
          <i class="ri-map-pin-fill" ></i><span className="ii">find new gym near you</span></div>
        <div className="heroImg-controller">
          <img src={heroIMG} alt="" />
        </div>
      </figure>
    </section>
  );
}




export default Hero;
