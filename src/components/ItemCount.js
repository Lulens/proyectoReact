import { useState } from 'react' //useState es un objeto array 

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const incrementar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
        
    }

    const decrementar = () => {
        if (count <= initial){
            setCount(initial)
        }else{
            setCount(count - 1)
        }
        
    }

    return(
        <div className="d-grid gap-2 d-md-block">
        <p>Mate de madera personalizado</p>
        <button className="btn btn-dark" type="button" onClick = {decrementar}>-</button>
        <p>{count}</p>
        <button className="btn btn-dark" type="button" onClick = {incrementar}>+</button><br></br>
        <button className="btn btn-dark" type="button" onClick={() => onAdd (count)}>Agregar al carrito</button>
        </div>
        
    )

}

export default ItemCount