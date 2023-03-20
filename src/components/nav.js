import React, { Component } from 'react';
import images from '../assests/images';
import '../assests/styles/navbar.css';
import '../assests/styles/gameflex.css';

class navFuckingbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand">
                        <span>
                            <img id="game_icon" src={images.gp3} alt="..." />
                            Game_Topic
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>               
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"><a class="nav-link" href="index.html" >Inicio</a></li>
                            <li className="nav-item "><p className="nav-link">Biblioteca</p></li>
                            <li className="nav-item "><p class="nav-link" >Busqueda Avanzada</p></li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li><p className="nav-link">
                                <span 
                                    className="d-inline-block" 
                                    tabindex="0" 
                                    data-toggle="tooltip" 
                                    title="Iniciar Sesión">
                                    <span 
                                        className="material-symbols-outlined" 
                                        id="login-icon" 
                                        data-toggle="modal" 
                                        data-target="#myModal">
                                            login
                                    </span> 
                                    <span 
                                        className="d-inline-block" 
                                        tabindex="0" 
                                        data-toggle="tooltip" 
                                        title="Disabled tooltip">
                                    </span>
                                </span>
                            </p></li>
                        </ul>
                    </div>
                </div>
            </nav>
        ) 
    }   
}

export default navFuckingbar;