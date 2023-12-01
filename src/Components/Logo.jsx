import logoImage from '../Img/Logo-Calcu.png';
import React from 'react';

function Logo (){
  return(
  <div className='freecodecamp-logo-contenedor'>
    <img className='freecodecamp-logo' alt='Logo de freeCodeCamp' src={logoImage} />
  </div>
  );
}
export default Logo; 