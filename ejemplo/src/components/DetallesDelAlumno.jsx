import React from 'react'
import Menu from './Menu'

function DetallesDelAlumno({alumno,numero,texto,aula,jsx}) {

    // const alumno = props.alumno
    // const numero = props.numero
    // const texto = props.texto
    // const aula = props.aula
    // const jsx = props.jsx
    console.log(jsx)

    //const {alumno} = props // Destructuring

    // function calcularPromedio(){

    // }

    let calificacionFinal = 0

    const calcularPromedio = ()=>{
        alert("Calculando... "+alumno.nombre)
        calificacionFinal = 10
    }


    //Reto: ¿Investigar qué es el estado?

    return (
        <>
            <Menu>
                <ul>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                </ul>
                <ul>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                </ul>
            </Menu>
            {/* <Menu children={[<ul>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                </ul>,
                <ul>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                    <li>Link1</li>
                </ul>]}/> */}
            <tr key={alumno.id}>
                <td>{alumno.nombre}</td>
                {alumno.calificaciones.map(
                    (calificacion,index)=><td key={index}>{calificacion}</td>
                )}
                <td>{calificacionFinal}</td>
                <td><button onClick={calcularPromedio}>Calcular</button></td>
            </tr>
        </>
    )
}

export default DetallesDelAlumno