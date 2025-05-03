import React, { Component } from "react";
import Slider from './Slider';
import SideBar from './SideBar';
class Home extends Component {
    render() {
        var buttonString = "Ir al blog"
        return (
            <div id="home">
                <Slider
                    title="Bienvenido a la primera pagina de react de vgama"
                    size="slider-big"
                    btn={buttonString}
                ></Slider>

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos articulos</h1>
                    </div>
                    <SideBar></SideBar>
                </div>
               

            </div>
        );
    }
}

export default Home;