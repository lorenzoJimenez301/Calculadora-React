import React from "react";
import '../Stylesheet/boton.css';

function Button(props){

    const esOperador = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor !==  '=');
    };

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador': null}`.trim()} onClick={() => props.manejarClic(props.children)}>{props.children}</div>
    );
}

export default Button;