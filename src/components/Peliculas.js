import React, { Component } from "react";
import MensajeEstatico from "./MensajeEstatico";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import SideBar from "./SideBar";
class Peliculas extends Component {

    state = {

    }

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        peliculas[0].titulo = "Batman Begins"
        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula, indice) => {
        console.log("Favorita marcada");
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        })
    }

    componentWillMount() {
        this.setState({
            peliculas: [{ titulo: "Batman vs Superman", image: "https://m.media-amazon.com/images/I/81GpJfqOTmL._AC_UF894,1000_QL80_.jpg" },
            { titulo: "El dorado", image: "https://m.media-amazon.com/images/S/pv-target-images/dd0534126bd6c862015e2f4312f0122d1fd6db513390695d30e229053cd591ad.jpg" },
            { titulo: "El gigante de hierro", image: "https://m.media-amazon.com/images/S/pv-target-images/52230b62169fac47c0a4874583ca36bb5d5d6098c3b5bac5197203670b240fc8.jpg" },
            { titulo: "La espada en la piedra", image: "https://play-lh.googleusercontent.com/rdafxXC9As7tcA8aGoTMooMyC204smsorOKP_mYgP8U54cmWkJPlNt51eE6XlGtzc4k9Iw" },
            { titulo: "Tierra de zombies", image: "https://m.media-amazon.com/images/I/71l5XGCpUqL._AC_UF894,1000_QL80_.jpg" },
            { titulo: "Hombres de negro", image: "https://m.media-amazon.com/images/S/pv-target-images/c80994ab0466cbe246f5c84003e6dcefb2b46f550e0b76de18fb8826c9a37432.jpg" },
            ],
            nombre: "Gama",
            favorita: {}
        })
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }
        return (
            <React.Fragment>
                <Slider
                    title="Peliculas"
                    size="slider-small"
                ></Slider>
                <div className="center">

                    <div id="content" className="peliculas">
                        <h2 className="subheader">Listado de peliculas</h2>
                        <p>Seleccion de las peliculas favoritas de: {this.state.nombre}</p>
                        <div>
                            <button onClick={this.cambiarTitulo} > Cambiar titulo </button>

                        </div>


                        {this.state.favorita.titulo ? (
                            <p className="favorita" style={pStyle}>
                                <strong>La pelicula favorita es: </strong>
                                <span>{this.state.favorita.titulo}</span>
                            </p>
                        ) : (
                            <p>No hay pelicula favorita</p>
                        )
                        }


                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita}
                                        ></Pelicula>

                                    )
                                })
                            }
                        </div>

                    </div>
                    <SideBar
                        blog="false"
                    ></SideBar>
                </div>
            </React.Fragment>
        );
    }
}

export default Peliculas;