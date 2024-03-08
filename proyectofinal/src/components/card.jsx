import React from "react";
import '../estilos/card.css'

const Card = ({ i, nombre, texto, img }) => {


    return (

        <div className="tarjeta-item col-12 col-lg-6" id={i}>
            <div class="card" id={i}>
                <img class="card-img-top" src={img} alt="Card" />
                <div class="card-body">
                    <h4 class="card-title">{nombre}</h4>
                    <p class="card-text">{texto}.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;