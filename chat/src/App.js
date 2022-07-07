import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
