const ItemList = () => {
    return(
        <ul>
                {productos.map(producto => <li key={producto.id}>{producto.name}</li>)}
        </ul>
    )
}

export default ItemList