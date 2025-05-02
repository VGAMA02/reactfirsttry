import React, { Component } from "react";
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';



class SeccionPruebas extends Component {
    contador = 0;

    constructor(props){
        super(props);
        this.state = {
            contador : 0
        }
    }

    HolaMundo(nombre,edad){
        var presentacion = (<div>
            <h2>Hola, soy {nombre}</h2>
            <h3>Tengo {edad}</h3>
        </div>
        );
        return presentacion;
    }

    sumar = (e) =>{
        this.setState({
            contador: (this.state.contador + 1)
        })
    }

    restar = (e) =>{
        this.setState({
            contador: (this.state.contador - 1)
        })
    }

    render() {
        var nombre = "Gama";
        return (
            <section id="content">
                <h2 className="subheader">Ultimos articulos</h2>
                <p>
                    Hola bienvenido a la pagina de vgama
                </p>

                <h2 className="subheader">Funciones y JXS Basico</h2>
                {this.HolaMundo(nombre,25)}


                <h2 className="subheader">Componentes</h2>
                <section className='componentes'>
                <MiComponente></MiComponente>
                <Peliculas></Peliculas>
                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contado: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Sumar" onClick={this.restar}/>
                </p>

          </section>
        );
    }
}

export default SeccionPruebas;