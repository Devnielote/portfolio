import React from "react";
import webDev from "../assets/web-developer.jpg";
// TODO: Buscar imagen para el header, considerar que sea una personal
//TODO: Optimizar la animación de la flecha para que sea de low-cost rendering.
function Header() {
  return (
    <>
      <div className="header__container">
        <div className="header__role">
          <p>
            WEB <br /> DEVELOPER
          </p>
        </div>
        <div className="header__img">
          <img src={webDev} alt="A person hands writting code" />
        </div>
        <div className="header__info">
          <div className="header__info__name">
            <p>
              DANIEL <br /> FLORES
            </p>
          </div>
          <div className="header__info__exp">
            <p>
              DESARROLLO EXPERIENCIAS WEB QUE HACEN MAS SIMPLE LA VIDA DE LAS
              PERSONAS
            </p>
          </div>
          <p>⇓</p>
        </div>
      </div>
    </>
  );
}

export { Header };
