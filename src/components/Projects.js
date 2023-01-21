import React from "react";
import "../css/Projects.css";
// TODO: Crear base de datos de proyectos con url, nombre, descripción general.
//TODO: Crear componente que se genere en base a los proyectos contenidos en la base de datos.
function Projects() {
  return (
    <>
      <div className="projects__container">
        {/* {db.map(el => {
            project(el.name, el.url, el.info)
        })} */}
        <p>Trabajos | Proyectos</p>
        <div className="projects">
          <div className="project">
            <p>Pendiente</p>
          </div>
          <div className="project">
            <p>Pendiente</p>
          </div>
          <div className="project">
            <p>Pendiente</p>
          </div>
          <div className="project">
            <p>Pendiente</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Projects };
