import { useRouteError } from "react-router-dom";
import Confused from './images/confused.jpg'
import Navbar from "./components/navbar";
import './estilos/notFound.css'

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <Navbar/>
      <div className="container text-center text-white bg-dark">
      <h1>Vaya...</h1>
      <img className='img-error' src={Confused} alt="confused steve"/>
      <p>Ha ocurrido un error al mostrar la página</p>
      
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="mb-4 d-block">Volver al inicio</a>
      </div>
    </div>
  );
}