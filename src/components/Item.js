const Item = () => {
    return(
        <div class="card" >
          <img src="..\images\comboCopetineraCuencos.jpeg" class="card-img-top" alt="Combo Tabla 15x40 + 4 Cuencos"></img>
          <div class="card-body">
            <p class="detalle card-title">Combo Copetinera + 2 Cuencos <br>$3300</br></p>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div> 
    )
}

export default Item














/*const recibirComida = () => {
    return new Promise((resolve, reject) => { //tres estados: primero va a estar pendiente, que el mozo me traiga la comida o que no me la traiga
        var hayComida = true

        if(hayComida){
            setTimeout(() => {
                resolve (console.log("6 Recibí comida"))
             }, 5000)
        } else {
            reject("6 No recibí comida")
        }

    })
}

console.log("1 voy al restaurant")
console.log("2 me siento en la mesa")
console.log("3 miro la carta")
console.log("4 pido la comida ")
console.log(recibirComida())
recibirComida().then(response => {
    console.log(response)
    console.log("7 como")
    console.log("8 pago")
    console.log("9 me voy")
}) .catch(error => {
    console.log(error)
    console.log("7 me voy")
}) .finally(() => {
    console.log("esto se ejecuta al final pase lo que pase")
})
console.log("5 miro el celular")*/