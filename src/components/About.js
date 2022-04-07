import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, quidem. Ipsa, impedit corporis a quo, tempora odio iure
              eum quia repellendus repudiandae labore necessitatibus, nisi
              praesentium ex officia! Earum perspiciatis at nisi, cum corporis
              alias rem. Praesentium, dignissimos quae impedit quod sunt
              laudantium. Sed a quasi earum eligendi, fugiat quos magni numquam
              mollitia ab dicta omnis aspernatur eos autem impedit hic
              blanditiis reprehenderit at, vero tempora commodi modi! Et
              excepturi tenetur corporis suscipit quis unde accusantium porro
              quas, sequi, ipsam commodi incidunt mollitia! Inventore quos nobis
              ab, eum magnam quidem rem accusantium dolorem nihil et asperiores
              odit minima deleniti expedita!
            </p> 
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/about.png" alt="about" height="500px" width="500px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
