import React from "react";

const CarWidget = () => {
    return(
        <div>
            <button type="button" class="btn btn-light position-relative"><img src="imagenes/carrito.png" width={25} />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3
                    <span class="visually-hidden">
                        unread messages
                    </span>
                </span>
            </button>   
        </div>
    )
}
export default CarWidget;