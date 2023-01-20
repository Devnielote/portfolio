import React from "react";
function TopNav() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleMenu = () => {
    setToggleMenu((prevCheck) => !prevCheck);
  };

  return (
    <>
      {!toggleMenu && (
        <button onClick={handleMenu} className="topNav__btn">
          Abrir <br /> menu
        </button>
      )}

      {toggleMenu && (
        <button onClick={handleMenu} className="topNav__btn">
          Cerrar <br /> menu
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
