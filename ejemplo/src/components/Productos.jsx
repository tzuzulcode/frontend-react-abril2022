import React from "react"

const Productos = ()=>{
    const listaProductos = ["Producto","Producto 2","Producto 3","Producto","Producto"]
    
    const listaProductosJSX = listaProductos.map((producto,index)=><p key={index} >{producto}</p>)

    const jsxElements = [<p key={1}>Elemento 1</p>,<p key={2}>Elemento 2</p>,<p key={3}>Elemento 3</p>]
    
    return <React.Fragment>

        <h1>Hola</h1>
        <p>Hola</p>
        {/*Expresión de JavaScript*/}
        {/* Esto es un comentario */}

        {jsxElements}

        {listaProductosJSX}

        {listaProductos.map(
            (producto,index)=><p key={index}>{producto}</p>
        )}
        {/* {
            listaProductos.map(producto=>{
                const productoMayus = producto.toUpperCase()

                return <p>{`{}`}</p>
            })
        } */}

    </React.Fragment>
}

export default Productos