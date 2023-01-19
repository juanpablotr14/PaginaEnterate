import React from 'react';
import './enterate.css';

const Enterate = () => {

  return (

    <div className="enterate" id="enterate">
        
        <div className="rectangulo"></div>

        <div className="contenido-seccion">

            <h2>Entérate</h2>

            <div className="galeria">

                <div className="card">
                    <img src="./img/enterate6.jpeg" alt='img.jpg'></img>
                </div>

                <div className="card">
                    <img src="./img/enterate1.jpeg" alt='img.jpg'></img>
                </div>

                <div className="card">
                    <img src="./img/enterate3.jpeg" alt='img.jpg'></img>
                </div>

                <div className="card">
                    <img src="./img/enterate4.jpeg" alt='img.jpg'></img>
                </div>

                <div className="masgrande">
                    <img src="./img/enterate5.jpeg" alt='img.jpg'></img>
                </div>

            </div>

        </div>

    </div>

  );

};

export default Enterate;