import React from "react";
import lkLogo from "../assets/linkedin.png";
import ghLogo from "../assets/github.png";
import platziLogo from "../assets/platzi.webp";
// TODO: Crear base de datos de proyectos con url, nombre, descripción general.
//TODO: Crear componente que se genere en base a los proyectos contenidos en la base de datos.
function Contact() {
  return (
    <>
      <div className="contact__container">
        <div className="contact__info">
          <p>Para ponernos en contacto:</p>
          <div className="line"></div>
          <div className="contact__social">
            <a href="#">
              <img src={lkLogo} alt="" />
            </a>
            <a href="#">
              <img src={ghLogo} alt="" />
            </a>
            <a href="#">
              <img src={platziLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { Contact };
