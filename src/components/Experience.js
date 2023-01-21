import React from "react";
import htmlIcon from "../assets/html-5.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import tsIcon from "../assets/typescript.png";
import tailwindIcon from "../assets/tailwind-logo.jpg";

function Experience() {
  return (
    <>
      <div className="experience__container">
        <div className="experience__title">
          <p>Lenguajes con los que trabajo</p>
        </div>
        <div className="experience__languages">
          <figure>
            <img src={htmlIcon} alt="" />
          </figure>

          <figure>
            <img src={cssIcon} alt="" />
          </figure>

          <figure>
            <img src={jsIcon} alt="" />
            <span>Javascript</span>
          </figure>

          <figure>
            <img src={reactIcon} alt="" />
            <span>ReactJs</span>
          </figure>

          <figure>
            <img src={tsIcon} alt="" />
            <span>Typescript</span>
          </figure>

          <figure>
            <img src={tailwindIcon} alt="" />
            <span>Tailwind CSS</span>
          </figure>
        </div>
      </div>
    </>
  );
}

export { Experience };
