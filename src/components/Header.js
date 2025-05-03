import React, { Component } from "react";
import logo from '../assets/images/logo.svg'
import { NavLink } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    {/*<!-- LOGO -->*/}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>

                    {/*<!-- MENU -->*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : undefined}>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/segunda-ruta" className={({ isActive }) => isActive ? "active" : undefined}>Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pagina-1" className={({ isActive }) => isActive ? "active" : undefined}>Pagina 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pagina-2" className={({ isActive }) => isActive ? "active" : undefined}>Pagina 2</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/*<!--LIMPIAR FLOTADOS-->*/}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}
export default Header;