import React, { useEffect } from "react";
import arrayProductos from "./json/productos"
import { useState } from "react";
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
    const [items, setItem] = useState([])

    useEffect(() =>{
        const promesa = new Promise ((resolve, reject) => {
            setTimeout(()=>{
                resolve(arrayProductos)
            }, 2000 );
        });

        promesa.then((data) =>{
            setItem(data);
        })
    })
    return(
        <div>
            <div className="alert text-center alert-warning alert-dismissible fade show" role="alert">
                <strong>
                    {greeting}
                </strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div>
                <ItemList items={items} />
            </div>
        </div>
    )
}
export default ItemListContainer;




