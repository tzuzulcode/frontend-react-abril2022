import Listas from "./components/Listas.jsx";
import Productos from "./components/Productos.jsx";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Listas/>} />
        <Route path="/productos" element={ <Productos/>} />
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