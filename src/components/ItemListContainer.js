import { obtenerProductos } from "../asyncmock"
import React, { useState, useEffect } from "react"
import React from "react"
import ItemList from "./ItemList"

const ItemListContainer = (greeting) => {
    const [productos, setProducts] = useState([])

    useEffect(() => {
        obtenerProductos().then(response => {
            setProducts(response)
        })
    }, [])
     
    return(
        <div className = "segundoBloque">
            <h1>{greeting.texto}</h1>
            <ul>
                {productos.map(producto => <li key={producto.id}>{producto.name}</li>)}
            </ul>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
