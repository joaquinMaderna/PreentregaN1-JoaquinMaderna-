import React from "react";
import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    
    const masStock = () => {
            setContador(contador + 1 )
    }
    const menosStock = () => {
        if (contador > 0) {
            setContador(contador - 1 )
        }
    }
    
    return(
        <div className="row">
            <div>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" onClick={masStock} className="btn btn-outline-primary">+</button>
                    <button type="button" className="btn btn-outline-primary">{contador}</button>
                    <button type="button" onClick={menosStock} className="btn btn-outline-primary">-</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount