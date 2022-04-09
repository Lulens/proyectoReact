const productos = [
    {
        id: 1,
        name: "Mate de cuero personalizado",
        price: 1500,
        category: "Mates",
        img: "",
        stock: 10,
        description:""

    },
    {
        id: 2,
        name: "Mate de calabaza personalizado",
        price: 1200,
        category: "Mates",
        img: "",
        stock: 15,
        description:""

    }
]

//mozo
export const obtenerProductos = () => {
    //inicio la comunicacion con el mozo
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}