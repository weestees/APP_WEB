import React, {Component} from "react"; //desectruraion de js sirve para importar solo lo que se necesita
import "./Header.css";

class Header extends Component{
    render(){
        return(
            <header className="app-header">
                <img src="" alt="logo" className="app-logo" />
                <nav className="app-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#contact">Contáctenos</a></li>
                    <li><a href="#messages">Mensajes</a></li>
                </ul>
                <div className="user-icon">
                    <img src="https://via.placeholder.com/30" alt="user" />
                </div>
                </nav>
            </header>
        )
    }
}
export default Header; //exportar la clase Header