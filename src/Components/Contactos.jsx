import React from 'react';
import './contacto.css';

const Contactos = () => {

  return (

    <section id="contacto" className="contacto">

        <div className="rectangulo"></div>

        <div className="contenido-seccion">

            <h2>Contacto</h2>

            <div className="fila">

                <div className="col">

                    <img src="./img/ubicacion.png" alt="img.jpg"></img>

                    <div className="info">

                        <ul>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                Colombia - Valle del Cauca - Pradera - Calle 7° #11-47
                            </li>
                            <li>
                                <i class="fa-solid fa-mobile-screen-button"></i>
                                Llama o Escribe: 321 7587182
                                <a> - </a>
                                <a className="what" href="https://api.whatsapp.com/send?phone=573217587182&data=AWBZi0yso12eU0Wp-OBvmCeKDA5oiNHlKRKiefyBeeNrCUyLOoSQM-_hD5P2EFmK_WZHlkZeYgzZpS5Ime_4lmn0HqVVfFHFWxUr1XBlFBphqYmHq2J2i0D6z2hcw9jAY-XFon4LOF0ZjT3TL5dxsxFbTjFIgXXbF2Y7K218lUk7q_SieOe5l6R68TI6vC7liwXMqc3BiGhxX1F6FQzllhOclJarjkpwdXKW8T2BK2FL8_aK5OeLR0oWdkqsk0WQF5ldI_1gsaO5KkVAm49g-Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR375dQMRbicH3GO4heRzf9y14325ZrTX31L-UmX0bOhgDn4FaCNCXtXoAo"><i class="fa-brands fa-whatsapp"></i></a>
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                Email: martvproducciones@gmail.com
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    </section>

  );

};

export default Contactos; 