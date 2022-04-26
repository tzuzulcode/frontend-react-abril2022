import React from 'react'

function DetallesDelAlumno({alumno}) {
    // const {alumno} = props // Destructuring

    // function calcularPromedio(){

    // }

    let calificacionFinal = 0

    const calcularPromedio = ()=>{
        alert("Calculando... "+alumno.nombre)
        calificacionFinal = 10
    }


    //Reto: ¿Investigar qué es el estado?

    return (
        <tr key={alumno.id}>
            <td>{alumno.nombre}</td>
            {alumno.calificaciones.map(
                (calificacion,index)=><td key={index}>{calificacion}</td>
            )}
            <td>{calificacionFinal}</td>
            <td><button onClick={calcularPromedio}>Calcular</button></td>
        </tr>
    )
}

export default DetallesDelAlumno