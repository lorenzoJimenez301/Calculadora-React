import './App.css';
import Logo from './Components/Logo';
import Button from './Components/button';
import Screen from './Components/Screen';
import ButtonClose from './Components/buttonClose';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () =>{
    if (input){
      setInput(evaluate(input));
    }else{
      alert('No hay datos para calcular!');
    }

  };

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
          <Screen input={input} />
        <div className='fila'>
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={calcularResultado}>=</Button>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClose manejarClear = {() => setInput('')}>Clear</ButtonClose>
        </div>
      </div>
    </div>
  );
}

export default App;
