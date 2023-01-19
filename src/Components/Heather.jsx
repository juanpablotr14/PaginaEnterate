import React from 'react';
import './heather.css';

const Heather = () => {

  return (

    <div className = "contenedor-header">

      <header>

        <div className = "logo">

          <a className="E" href = "#">E</a>
          <a className="E" href = "#">N</a>
          <a className="E" href = "#">T</a>
          <a className="E" href = "#">É</a>
          <a className="E" href = "#">R</a>
          <a className="E" href = "#">A</a>
          <a className="E" href = "#">T</a>
          <a className="E" href = "#">E</a>
          <a>                           </a>
          <a className="P" href = "#">P</a>
          <a className="E" href = "#">R</a>
          <a className="A" href = "#">A</a>
          <a className="D" href = "#">D</a>
          <a className="E2" href = "#">E</a>
          <a className="R" href = "#">R</a>
          <a className="A2" href = "#">A</a>

        </div>
        
        <div className="nav">
          <nav id="nav">

            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#franja">Franja I.</a></li>
              <li><a href="#noticias">Noticias</a></li>
              <li><a href="#recomendaciones">Te recomendamos</a></li>
              <li><a href="#servicioSocial">Servicio Social</a></li>
              <li><a href="#enterate">Entérate</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>

          </nav>

        </div>

        <div className="nav-responsive">

          <i className="fa-solid fa-bars"></i>

        </div>

      </header>

    </div>

  );

};

export default Heather;