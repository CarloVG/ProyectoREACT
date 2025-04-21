/*import React from 'react';*/
import React, {useState} from 'react';
import Saludo from './components/Saludo';
import './App.css';

function App() {
  function mostrasBoton(){//Manejo de eventios como clicks usando funciones
    alert('!Hiciste click en el boton!')
  }
  const [contador, setContador] = useState(0);
  function aumentar(){
    setContador(contador + 1);
  }
  function resetear(){
    setContador(0);
  }
  

  return (
    <div>
      <h1 className='tituloPrincipal'>¡Hola desde mi primer app React!</h1>
      <p>Estoy aprendiendo paso a paso 🚀</p>
      <Saludo nombre="Carlo" />
      <button onClick={mostrasBoton}>Haz click aqui</button>
      <Saludo nombre="Carolina" />

      <h1 className='titulo'>Hola me llamo Carlo Vargas Gonzalez</h1>


      <h1>Contador : {contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <br />
      <button onClick={resetear} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>Reinicia</button>
    </div>
  );
}

export default App;
