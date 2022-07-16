import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Chats from './pages/Chats';
import Users from './pages/Users';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { validate } from './features/auth/extraReducers';
import Chat from './pages/Chat';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(validate())
  },[])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/chats' element={<Chats/>}/>
        <Route path='/chats/:id' element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
