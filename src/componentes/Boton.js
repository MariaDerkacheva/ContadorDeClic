import React from "react";
import "../hojasEstilo/Boton.css";

function Boton({texto, botonClik, manejarClick}) {
    return(
        <button 
            className = {botonClik ? "boton-click" : "boton-reiniciar"}
            onClick={manejarClick}>
        {texto}
        </button>
    )
};

export default Boton;