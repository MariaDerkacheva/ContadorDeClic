import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoFree from './imagenes/logo.png';
import { useState } from 'react';

function App() {
//       valor   , funcion que actualiza  
  const [numClics, setNumClics] = useState(0);//=> es el valor inicial de los clicks
  
  const manejarClick = () => {
    setNumClics(numClics +1); 
  };

  const reiniciarCon = () =>{
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo'>
          <img 
            className='logo'
            src={logoFree}
            alt='logo' />
      </div>
      <div className='contenedor-contador'>
          <Contador numClics={numClics} />
          <Boton texto="Clic"
          botonClik={true}
          manejarClick= {manejarClick} />

          <Boton
          texto="Reiniciar"
          botonClik= {false}
          manejarClick= {reiniciarCon} />
      </div>
    </div>
  );
};

export default App;
