import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from "./components/MiComponente";
import Error from "./components/Error";
import PaginaDePruebas from "./components/PaginaDePruebas";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Blog from "./components/Blog";



class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                {/* Configurar rutas y páginas */}
                <Header></Header>




                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route exact path="/segunda-ruta" element={<MiComponente />} />
                    <Route path="/hola" element={<h1>HOLA</h1>} />

                    <Route path="/pruebas/:id" element={<PaginaDePruebas />} />



                    <Route path="*" element={<Error />} />

                </Routes>

                <div className="center">



                    { /* <Peliculas></Peliculas> */}


                    <div className='clearfix'></div>

                </div> {/* END DIV FOOTER */}
                <Footer></Footer>

            </BrowserRouter>
        );
    }
}

export default Router;