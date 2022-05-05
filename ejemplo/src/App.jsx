import Listas from "./components/Listas.jsx";
import Productos from "./components/Productos.jsx";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Calificaciones from "./components/Calificaciones.jsx";
import Contador from "./components/Contador.jsx";
import Estado from "./components/Estado.jsx";
import Effects from "./components/Effects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Listas/>} />
        <Route path="/state" element={ <Contador/>} />
        <Route path="/estado" element={ <Estado/>} />
        <Route path="/effects" element={ <Effects/>} />
        <Route path="/productos" element={ <Productos/>} />
        <Route path="/calificaciones" element={ <Calificaciones/>} />
      </Routes>

      {/* <Productos></Productos> */}
    </Router>
  );
}


// primer componente
// const MiComponente =()=>{
//   return <h1>Hola</h1>
// }

export default App;

//https://github.com/tzuzulcode/frontend-react-abril2022