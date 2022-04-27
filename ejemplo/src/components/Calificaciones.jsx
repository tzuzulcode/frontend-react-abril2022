import React from 'react'
import DetallesDelAlumno from './DetallesDelAlumno'
const alumnos = [
    {
        id:"al-01",
        nombre:"Tzuzul",
        calificaciones:[10,10,10]
    },
    {
        id:"al-02",
        nombre:"Jorge",
        calificaciones:[9,10,10]
    }
]

function Calificaciones() {
  return (
    <>
        <table>
            <thead>
                <th>
                    <td>Nombre</td>
                    <td>Calificaciones</td>
                </th>
            </thead>
            <tbody>
                {alumnos.map(alumno=>(
                    <DetallesDelAlumno alumno={alumno} numero={5} texto={"Hola mundo"} jsx={<div><p>Hola</p><p>Hola2</p></div>} aula="a1" />
                ))}
                {/* {[<DetallesDelAlumno alumno={alumno}/>,
                    <DetallesDelAlumno alumno={alumno}/>,
                    <DetallesDelAlumno alumno={alumno}/>,
                    <DetallesDelAlumno alumno={alumno}/>,
                    <DetallesDelAlumno alumno={alumno}/>,]} */}
            </tbody>
        </table>
    </>
  )
}

export default Calificaciones