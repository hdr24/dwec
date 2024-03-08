import Navbar from './components/navbar';
import Login from './login'
import Logo from './images/mclogo.png'
import Screenshot1 from './images/screenshot1.jpg'
import Screenshot2 from './images/screenshot2.png'
import Screenshot3 from './images/screenshot3.webp'
import Footer from './components/footer';
const Root = () => {
    const user = sessionStorage.getItem('user')
    return (
        <div className='container-fluid p-0 m-0'>
            <Navbar />
            <div className='container text-white bg-dark'>
                <h1>MC API <img src={Logo} alt="Logo" width="40px" /></h1>
                <p>Puedes usar la barra de navegación de arriba para moverte entre las páginas de la App</p>

                <p>Minecraft es un juego de mundo abierto donde puedes construir todo lo que te apetezca</p>
                <p>En esta aplicación podrás ver los items y los bloques que existen en Minecraft</p>
                {!user && (
                    <div>
                        <p>Tienes que iniciar sesión para poder usar la aplicación</p>
                        <Login />
                    </div>
                )}
                <hr />
                <p>Estas son algunas capturas de Minecraft</p>
                <div id="demo" class="carousel slide mb-4" data-bs-ride="carousel">


                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>


                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Screenshot1} alt="Los Angeles" class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img src={Screenshot2} alt="Chicago" class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img src={Screenshot3} alt="New York" class="d-block w-100" />
                        </div>
                    </div>


                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>

                

            </div>
            <Footer/>
        </div>
    )
}

export default Root;