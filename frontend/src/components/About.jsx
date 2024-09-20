import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">

              Welcome to Flavor Haven, Since 2024, we've been dedicated to serving delicious, locally-sourced dishes crafted with passion and care.
              Our menu features a blend of classic and innovative flavors, prepared by our talented chefs using the freshest ingredients. At Flavor Haven, 
              we believe that great food and friendly service create memorable dining experiences.
              Join us for a meal and see why we’re a favorite in the community. We can’t wait to serve you!


            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
