import './App.css';
import logo from "./imagenes/logo.png";
import Boton from './componentes/Boton'

function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img className='freecodecamp-logo'
      src={logo}
      alt='Logo de freecodecamp'/>
     </div>
     <div className='contenedor-principal'>
      <Boton
      texto='Clic'
      esBotonDeClic={true}
      manejarclic={manejarClic}/>
      <Boton
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarclic={reiniciarContador}/>
     </div>
    </div>
  );
}

export default App;
