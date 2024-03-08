import React from "react";

const Boton = ( { texto, setEndpoint} ) => {

    const manejarClic = () => {
        setEndpoint(texto)
    }

    return (
        <button onClick={manejarClic} className="btn btn-success me-5 ms-5 mt-3">
            {texto}
        </button>
    )
}

export default Boton