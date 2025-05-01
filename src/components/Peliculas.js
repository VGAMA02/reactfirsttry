import React, {Component} from "react";
import MensajeEstatico from "./MensajeEstatico";

class Peliculas extends Component{
    render(){
        return(
            <div id="peliculas">
                <h1>Soy el componente de peliculas</h1>
                <MensajeEstatico></MensajeEstatico>
            </div>
        );
    }
}

export default Peliculas;