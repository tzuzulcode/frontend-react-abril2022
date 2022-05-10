import {Link} from 'react-router-dom'

const Listas =()=>{


    //Reto: Mostrar datos de los alumnos
    const alumnos = [
        {
            name:"Tzuzul",
            edad:23
        },
        {
            name:"Eduardo",
            edad:25
        },
        {
            name:"Claudia",
            edad:24
        },
    ]

    // Devolviendo un Fragment
    return <>
        {alumnos.map((alumno,index)=><div className="alumno" key={index}>
            <p>{alumno.name}</p>
        </div>)}

        <Link to="/calificaciones">Calificaciones</Link>
        <Link to="/state">Contador</Link>
        <Link to="/estado">Estado</Link>
        <Link to="/effects">Effects</Link>
        <Link to="/context">Context</Link>
    </>
}


export default Listas