import React from 'react';
import './serviciosocial.css';

const ServicioSocial = () => {

  return (

    <section id="servicioSocial" className="serviciosocial">

      <div className="rectangulo"></div>

      <div className="contenido-seccion">

        <div className="titulo">
          <h2>Servicio Social</h2>
        </div>

        <div className="galeria">

          <div className="card">
            <img src="./img/servicio1.jpeg" alt='img.jpg'></img>
          </div>

          <div className="card">
            <img src="./img/servicio2.jpeg" alt='img.jpg'></img>
          </div>

          <div className="card">
            <img src="./img/servicio3.jpeg" alt='img.jpg'></img>
          </div>

          <div className="card">
            <img src="./img/servicio4.jpeg" alt='img.jpg'></img>
          </div>

          <div className="card">
            <img src="./img/servicio5.jpeg" alt='img.jpg'></img>
          </div>

          <div className="card">
            <img src="./img/servicio7.jpeg" alt='img.jpg'></img>
          </div>

          <div className="card">
            <img src="./img/servicio8.jpeg" alt='img.jpg'></img>
          </div>

        </div>

      </div>

    </section>

  );

};

export default ServicioSocial;