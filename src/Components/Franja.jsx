import React from 'react';
import './franja.css';

const Franja = () => {

    return (

        <div id="franja" className="franja">
            
            <div className="rectangulo"></div>

            <div className="titulo">

                <h2>Franjas Informativas</h2>

            </div>

            <div className="contenido-seccion">

            <div className="card">

                <div className="titulo">
                    <h3>19 / Enero / 2023</h3>
                </div>

                <div className="enlace">

                    <a href="https://www.facebook.com/100063543464544/videos/1775076602874607/">
                        <img src="./img/franja3.jpeg" alt="img.jpeg"></img>
                    </a>

                </div>

                </div>

                <div className="card">

                    <div className="titulo">
                        <h3>18 / Enero / 2023</h3>
                    </div>

                    <div className="enlace">

                        <a href="https://www.facebook.com/watch/live/?extid=CL-UNK-UNK-UNK-IOS_GK0T-GK1C&mibextid=2Rb1fB&ref=watch_permalink&v=865105554539976">
                            <img src="./img/franja.jpeg" alt="img.jpeg"></img>
                        </a>

                    </div>

                </div>

                <div className="card">

                    <div className="titulo">
                        <h3>17 / Enero / 2023</h3>
                    </div>

                    <div className="enlace">

                        <a href="https://www.facebook.com/watch/live/?extid=CL-UNK-UNK-UNK-IOS_GK0T-GK1C&mibextid=2Rb1fB&ref=watch_permalink&v=1259823261541384">
                            <img src="./img/franja2.jpeg" alt="img.jpeg"></img>
                        </a>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Franja;