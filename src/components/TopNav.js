import React from "react";
import menu from "../assets/icons8-menu.svg";
import close from "../assets/icons8-close.svg";
function TopNav() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleMenu = () => {
    setToggleMenu((prevCheck) => !prevCheck);
  };

  return (
    <>
      {!toggleMenu && (
        <button onClick={handleMenu} className="topNav__btn">
          <img src={menu} alt="" />
        </button>
      )}

      {toggleMenu && (
        <button onClick={handleMenu} className="topNav__btn">
          <img src={close} alt="" />
        </button>
      )}

      {toggleMenu && (
        <div className="topNav__container">
          <ul id="topNavMenu">
            <li>
              <p>Daniel Flores</p>
            </li>
            <li>
              <p>Freelancer</p>
            </li>
            <li>
              <p>Ubicado en Nuevo León - México</p>
            </li>
          </ul>
          <ul id="topNavMenu">
            <li>
              <a onClick={handleMenu} href="#">
                Trabajos
              </a>
            </li>
            <li>
              <a onClick={handleMenu} href="#">
                Acerca de
              </a>
            </li>
            <li>
              <a onClick={handleMenu} href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export { TopNav };
