import Contactos from "./Components/Contactos";
import Recomendaciones from "./Components/Recomendaciones";
import Footer from "./Components/Footer";
import Heather from "./Components/Heather";
import Inicio from "./Components/Inicio";
import ServicioSocial from "./Components/ServicioSocial";
import Noticias from "./Components/Noticias";
import Enterate from "./Components/Enterate";
import Franja from "./Components/Franja";


function App() {

  return (

    <div className="App">

      <Heather></Heather>
      <Inicio></Inicio>
      <Franja></Franja>
      <Noticias></Noticias>
      <Recomendaciones></Recomendaciones>
      <ServicioSocial></ServicioSocial>
      <Enterate></Enterate>
      <Contactos></Contactos>
      <Footer></Footer>
      
    </div>

  );

};

export default App;
