import React from "react";
import "../styles/classes.css";
import classeImg from "../../images/trainer.png";

const Klat = () => {
  return (
    <section className="class-container" id="classes"  data-aos="zoom-in-right" data-aos-duration="2000">
      <figure className="class-controller">
        <div className="class-img-container">
          <img src={classeImg} alt="" />
        </div>
        
        <figcaption className="class-text-container"  data-aos="zoom-in-left" data-aos-duration="2000">
          <h2 className="classText-head">
            Ready to make a <span className="highlight">change ?</span>
          </h2>
          <p className="class-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            aut eum sit vitae rem totam optio minima perspiciatis ab aspernatur
            molestias nulla voluptate reprehenderit, saepe, vero quas iure
         
          </p>

          <a href="#getStarted" className="get-started">get Started</a>
        </figcaption>
      </figure>
    </section>
  );
};

export default Klat;
