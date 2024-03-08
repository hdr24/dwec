import React from "react";
import Logo from '../images/mclogo.png'
import '../estilos/navbar.css'

const Navbar = () => {
    const user = sessionStorage.getItem('user')
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img src={Logo} alt="logo-mc" width="40px" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/app">App</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/acerca">Acerca</a>
                        </li>
                        
                    </ul>
                    {user && (
                    <li class="nav-item dropdown text-white" >
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{sessionStorage.getItem('user')}</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/logout">Cerrar sesión</a></li>
                            </ul>
                        </li>
                        )}
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;