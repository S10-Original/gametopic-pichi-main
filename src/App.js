//import { useState } from "react";
import NavFuckingbar from './components/nav';
import Modal from './modal';
import React, {Component} from 'react';
import '../src/assests/styles/navbar.css';
import '../src/assests/styles/gameflex.css';
import '../src/assests/styles/registro.css';
import JuegosVistaPrevia from './components/JuegosVistaPrevia.js';


export default class App extends Component {
    render(){
        return(
            <div id="contenido">
                <NavFuckingbar />
                <Modal />
                <div className="jumbotron">
                    <div className="container text-center">
                        <h1>
                            ¡Tu informante favorito de videojuegos!
                        </h1>
                    </div>
                </div>
            <div id="primary-container">
            <JuegosVistaPrevia
            nombreJuego="tetriswei"
            generosJuego="puzzle"
            imagenJuego="shyguy"
            valoracionJuego="10" />

            <JuegosVistaPrevia
            nombreJuego="Mario Party 7"
            generosJuego="puzzle"
            imagenJuego="marioParty7"
            valoracionJuego="8" />

            <JuegosVistaPrevia
            nombreJuego="Mario Party 7"
            generosJuego="puzzle"
            imagenJuego="marioParty7"
            valoracionJuego="8" />

            <JuegosVistaPrevia
            nombreJuego="Mario Party 7"
            generosJuego="puzzle"
            imagenJuego="marioParty7"
            valoracionJuego="8" />

            <JuegosVistaPrevia
            nombreJuego="Mario Party 7"
            generosJuego="puzzle"
            imagenJuego="marioParty7"
            valoracionJuego="8" />

            <JuegosVistaPrevia
            nombreJuego="Mario Party 7"
            generosJuego="puzzle"
            imagenJuego="marioParty7"
            valoracionJuego="8" />

            <JuegosVistaPrevia
            nombreJuego="Mario Party 7"
            generosJuego="puzzle"
            imagenJuego="marioParty7"
            valoracionJuego="8" />



            </div>
            
        
                
            </div>
        );
    }
}
