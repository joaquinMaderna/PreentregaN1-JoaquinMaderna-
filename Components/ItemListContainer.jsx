import React from "react";

const ItemListContainer = ({greeting}) =>{
    return(
        <h1 style={{display:"flex",justifyContent:"center"}}>
            {greeting}
        </h1>
    )
}

export default ItemListContainer;