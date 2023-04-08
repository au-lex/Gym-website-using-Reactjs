import React from "react";
import "../styles/schedule.css";
import lunges from "../../images/lunges.png";
import yoga from '../../images/yoga-pose.png';
import extended from '../../images/extended.png';

const Schedule = () => {
  return (
    <section className="schedule-container" id="schedule">
      <section className="schedule-text-container">
        <h4 className="schedule-header-text">
          Benefits of <span className="highlight">Exercise</span>
        </h4>
        <p className="schedule-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nihil
          nobis nam adipisci voluptates maiores vitae corrupti beatae sapiente
          eius.
        </p>
      </section>
      <section className="schdeule-main" >
        <figure className="schedule-controller" data-aos="zoom-in" data-aos-duration="2000">
          <div className="lunges-img-container">
            <img src={lunges} alt="" />
          </div>
          <figcaption className="img-desc">
            <h4 className="img-title">Healthy Life</h4>
            <p className="imgSchedule-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
        
            </p>
          </figcaption>
        </figure>

        <figure className="schedule-controller"  data-aos="zoom-in" data-aos-duration="2000">
          <div className="lunges-img-container">
            <img src={extended} alt="" />
          </div>
          <figcaption className="img-desc">
            <h4 className="img-title">Reducing Blood Pressure</h4>
            <p className="imgSchedule-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
              
            </p>
          </figcaption>
        </figure>

        <figure className="schedule-controller"  data-aos="zoom-in" data-aos-duration="2000">
          <div className="lunges-img-container">
            <img src={yoga} alt="" />
          </div>
          <figcaption className="img-desc">
            <h4 className="img-title">Increased Flexibility</h4>
            <p className="imgSchedule-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
            
            </p>
          </figcaption>
        </figure>
      </section>
    </section>
  );
};

export default Schedule;
