class ProductoManager {
    #precioBaseDeGanancia = 0.15
    constructor(){
        this.productos = []
    }

    getProducto(){
        return this.productos
    }

    agregarProducto(titulo,descripcion,precio,tumbnail,stock){
        const producto = {
            id: this.#generarId(),
            titulo,
            descripcion,
            precio: precio + this.#precioBaseDeGanancia,
            tumbnail,
            stock,
        }
        this.productos.push(producto)

    }



    agregarUsuario(idProducto, idUsuario){
        const producto = this.#evaluarproducto(idProducto)
        if(producto){
           if (producto.participante.includes(idUsuario)){
            console.log('producto ya esta incluido')
           }else{
            producto.participante.push(idUsuario)
            console.log('producto incluido con exito')
           }
        }else {
            console.log('evento no existe')
        }
    }

    ponerProductoEnGira(idProducto){
        const producto = this.#evaluarProducto(idProducto)
        if(producto){
            const nuevoProducto = {
            ...producto,
            id:this.#generarId,
            }
            this.productos.push(nuevoProducto)
        }else{
            console.log('producto no existe')
        }
    }



    #generarId(){
        let id = 1
        if(this.productos.length!==0){
            id = this.productos[this.productos.length-1].id + 1
        }
        return id
    }
    #evaluarEvento(idProducto){
        return this.productos.find(producto=>producto.id===idProducto)
    }
}

const ProductoManager1 = new ProductoManager()
const ProductoManager2 = new ProductoManager()
ProductoManager1.agregarProducto('producto1', 'stock1')
ProductoManager.agregarProducto('producto2', 'stock2')
//ProductoManager.agregarProducto('Evento3','Lugar3',5,80)
ProductoManager.agregarUsuario(2,1)
//ProductoManager.ponerEventoEnGira(1,'nuevoLugar1',new Date('01/10/2023'))
//ProductoManager.ponerEventoEnGira(2,'nuevoLugar2',new Date('01/16/2023'))

console.log(productoManager.getProducto())
