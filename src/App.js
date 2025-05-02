
import './assets/css/App.css';
//importar componenetes

import Header from './components/Header';
import Slider from './components/Slider';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';


function App() {

  var buttonString = "Ir al blog"

  return (
    <div className="App">


      <Header></Header>

      <Slider 
      title="Bienvenido a la primera pagina de react de vgama"
      btn = {buttonString}
      ></Slider>

     

      <div className="center">
        
        <Peliculas></Peliculas>
        <SideBar></SideBar>

          <div className='clearfix'></div>

      </div> {/* END DIV FOOTER */}
      <Footer></Footer>
    </div>
   
  );
}

export default App;
