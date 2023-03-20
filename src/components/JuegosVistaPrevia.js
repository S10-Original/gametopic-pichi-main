import React from "react";
import "../assests/styles/gameflex.css";


function JuegosVistaPrevia({nombreJuego, generosJuego, imagenJuego, valoracionJuego}) {
    return (
        <button className="BotonSinBorde">
            <div id="secondary-container" className="second">
                <div id="image-container">
                    <img className="game-image" alt="..." src={require(`../assests/img/${imagenJuego}.png`)} />
                    <p id="game-contr">{valoracionJuego}</p>
                </div>
                <p id="game-name">{nombreJuego}</p>
                <p id="game-tag">{generosJuego}</p>
            </div>
            
        </button>
    );
}


export default JuegosVistaPrevia;