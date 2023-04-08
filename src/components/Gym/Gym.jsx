import React from "react";
import "../styles/gym.css";

const Gym = () => {
  return (
    <section className="gym-container" id="pricing">
      <section className="gym-text-container">
        
        <h2 className="gym-title" >
          Gym <span className="highlight">Pricing</span> Plan
        </h2>
        <p className="gym-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          soluta voluptatum animi consequuntur ullam corporis saepe error? Quis,
          ex fugiat.
        </p>
      </section>
      <section className="gym-card-controller"  data-aos="zoom-in" data-aos-duration="2000">
        <div className="gym-card01">
          <section className="card01-textContainer">
            <section className="title-container">
              <h4 className="card01-title">Regular Memeber</h4>
              <p className="desc">$50 <span className="des-amount">/month</span> </p>
            </section>
            <ul className="gymText-desc">
              <li>unlimited access to the gym</li>
              <li>customer support</li>
              <li>personal trainer</li>
              <li>standard options</li>
              <li>5 classes per week</li>
            </ul>
            <section className="Gym-btnContainer">
              <a href="#join" className="gym-btn">join now</a>
            </section>
          </section>
        </div>
        
        <div className="gym-card01">
          <section className="card01-textContainer">
            <section className="title-container highlight02">
              <h4 className="card01-title  ">master Memeber</h4>
              <p className="desc">$50 <span className="des-amount">/month</span> </p>
            </section>
            <ul className="gymText-desc">
              <li>unlimited access to the gym</li>
              <li>customer support</li>
              <li>personal trainer</li>
              <li>standard options</li>
              <li>5 classes per week</li>
            </ul>
            <section className="Gym-btnContainer">
              <a href="#join" className="gym-btn">join now</a>
            </section>
          </section>
        </div>

        <div className="gym-card01">
          <section className="card01-textContainer">
            <section className="title-container">
              <h4 className="card01-title">Regular Memeber</h4>
              <p className="desc">$50 <span className="des-amount">/month</span> </p>
            </section>
            <ul className="gymText-desc">
              <li>unlimited access to the gym</li>
              <li>customer support</li>
              <li>personal trainer</li>
              <li>standard options</li>
              <li>5 classes per week</li>
            </ul>
            <section className="Gym-btnContainer">
              <a href="#join" className="gym-btn">join now</a>
            </section>
          </section>
        </div>

      </section>
    </section>
  );
};

export default Gym;
