const Productos = ()=>{
    const listaProductos = ["Producto","Producto 2","Producto 3","Producto","Producto"]
    
    const listaProductosJSX = listaProductos.map(producto=><p>{producto}</p>)

    const jsxElements = [<p>Elemento 1</p>,<p>Elemento 2</p>,<p>Elemento 3</p>]
    
    return <div>
        <h1>Hola</h1>
        <p>Hola</p>
        {/*Expresión de JavaScript*/}
        {/* Esto es un comentario */}

        {jsxElements}

        {listaProductosJSX}

        {listaProductos.map(
            producto=><p>{producto}</p>
        )}
        {/* {
            listaProductos.map(producto=>{
                const productoMayus = producto.toUpperCase()

                return <p>{`{}`}</p>
            })
        } */}

    </div>
}

export default Productos