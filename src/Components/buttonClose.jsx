import React from 'react';
import '../Stylesheet/buttonClose.css';

function ButtonClose(props){
    return(
        <div onClick = {props.manejarClear} className='boton-clear'>
        {props.children}
        </div>
    );
}

export default ButtonClose;
