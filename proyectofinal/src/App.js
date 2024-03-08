import minecraft from "./images/minecraft.webp"
import allay from './images/allay.jpg'
import frogs from './images/frogs.webp'
import { useEffect, useState } from "react";
import Card from "./components/card.jsx";
import loading from './images/loading.webp'
import Navbar from "./components/navbar.jsx";
import Boton from "./components/boton.jsx";
import './estilos/App.css'
import Footer from "./components/footer.jsx";


const App = () => {

    if (!sessionStorage.getItem('user')) {
        window.location.href = '/'
    }

    const [endpoint, setEndpoint] = useState('items')
    const [data, setData] = useState(null);
   
    useEffect(() => {
        let isMounted = true;
    
        const fetchData = async () => {
            try {
                const response = await fetch(`https://minecraft-api.vercel.app/api/${endpoint}`);
                const result = await response.json();
                
                if (isMounted) {
                    setData(result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    
        return () => {
            isMounted = false;
        };
    }, [endpoint]);

    if (!data) {
        return (
            <div className="loading">
                <img src={loading} alt="Cargando..." />
            </div>
        )
    }
    
    return (
        <div>
        <div className=''>

            <Navbar />
            <div className="container bg-dark text-white">
                <h1>Bienvenido a la API de Minecraft</h1>
                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>


                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={minecraft} alt="Los Angeles" className="d-block w-100" height='20%' />
                        </div>
                        <div className="carousel-item">
                            <img src={frogs} alt="Chicago" className="d-block w-100" height='20%' />
                        </div>
                        <div className="carousel-item">
                            <img src={allay} alt="New York" className="d-block w-100" height='20%' />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
                <hr />
                <div className="text-center">
                <h3 className="mt-4">Escoja entre mostrar los items o los bloques</h3>
                <Boton
                    texto='blocks'
                    endpoint = {endpoint}
                    setEndpoint={setEndpoint}

                />

                <Boton
                    texto='items'
                    endpoint = {endpoint}
                    setEndpoint={setEndpoint}

                />
                </div>
              <hr />
                <div className="row">
                    {data.map(function (item, i) {
                        return (
                            <Card
                                i={i}
                                nombre={item.name}
                                img={item.image}
                                texto={item.description}
                            />

                        )
                    })}
                </div>

            </div>
            
        </div>
        <Footer/>
        </div>
    )
}

export default App;