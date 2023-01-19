import React from 'react';
import './inicio.css';

const Inicio = () => {

  return (

    <section id="inicio" className="inicio">

        <div className="contenido-banner">

            <div className="contenedor-img">

                <img src="./img/ENTERATE PRADERA PNG.png" alt="img.png"></img>
                <h1>La Pradereña Entérate Pradera TV</h1>

                <div className="redes">

                  <a className="ing" href="https://www.instagram.com/enteratepradera/"><i class="fa-brands fa-instagram"></i></a>
                  <a className="face" href="https://www.facebook.com/MartvProd"><i class="fa-brands fa-facebook"></i></a>
                  <a className="what" href="https://api.whatsapp.com/send?phone=573217587182&data=AWBZi0yso12eU0Wp-OBvmCeKDA5oiNHlKRKiefyBeeNrCUyLOoSQM-_hD5P2EFmK_WZHlkZeYgzZpS5Ime_4lmn0HqVVfFHFWxUr1XBlFBphqYmHq2J2i0D6z2hcw9jAY-XFon4LOF0ZjT3TL5dxsxFbTjFIgXXbF2Y7K218lUk7q_SieOe5l6R68TI6vC7liwXMqc3BiGhxX1F6FQzllhOclJarjkpwdXKW8T2BK2FL8_aK5OeLR0oWdkqsk0WQF5ldI_1gsaO5KkVAm49g-Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR375dQMRbicH3GO4heRzf9y14325ZrTX31L-UmX0bOhgDn4FaCNCXtXoAo"><i class="fa-brands fa-whatsapp"></i></a>
                  <a className="yout" href="https://www.youtube.com/@enteratepraderamartvprod89"><i class="fa-brands fa-youtube"></i></a>

                </div>

            </div>

        </div>

    </section>

  );

};

export default Inicio;