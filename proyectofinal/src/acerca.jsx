import React from "react";
import Navbar from "./components/navbar";
import ReactLogo from './images/reactlogo.png'
import GitLogo from './images/gitLogo.svg'
import Footer from "./components/footer";
const Acerca = () => {
    return (
        <div>
            <Navbar />
            <div className="container text-white bg-dark text-justify mb-5">
                <h1>Acerca de</h1>
                <p>Esta aplicación ha sido desarrollada por Héctor del Real López usando React <img src={ReactLogo} alt="logo react" width='2%' /></p>
                <p>Esta usa varios hooks y componentes funcionales, entre ellos el hook de useEffect y useState, esto permite
                    actualizar de forma dinámica nuestro aplicación. Tambien usamos Router React para manejar las rutas de nuestra aplicación
                    y así poder tener varias páginas
                </p>
                <p>La aplicación usa una API gratuita para mostrar los items o los bloques. Gracias a esto, tenemos siempre información actualizada
                    ya que Minecraft es un juego que está constantemente siendo actualizado
                </p>
                <h2>Uso de la aplicación</h2>
                <p>Usar la aplicación es muy sencillo, para ello debemos primero iniciar sesión con Google.
                    Una vez hayamos iniciado sesión se nos redirigirá automáticamente a la aplicación. Por defecto
                    se muestran los items de Minecraft pero, gracias a los botones que nos permite crear React, podemos cambiar
                    entre bloques e items
                </p>
                <h2>Otros proyectos</h2>
                <p>Puede encontrar otros proyectos similares en mi GitHub</p>
                <a href="https://github.com/hdr24" className="text-center"><img src={GitLogo} alt="Logo Git" width='10%' className="d-block mx-auto mb-4"/></a>
            </div>
            <Footer/>
        </div>
    )
}

export default Acerca;