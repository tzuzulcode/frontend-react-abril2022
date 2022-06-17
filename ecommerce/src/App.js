import { useContext, useEffect, lazy, Suspense } from 'react';
import {Route,Routes} from 'react-router-dom'
import { get } from './api';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import { authContext } from './context/Auth';
import Loading from './pages/Loading';
// import Callback from './pages/Callback';
// import Home from './pages/Home';
// import Hooks from './pages/Hooks';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
const Callback = lazy(()=>import('./pages/Callback'))
const Home = lazy(()=>import('./pages/Home'))
const Hooks = lazy(()=>import('./pages/Hooks'))
const Login = lazy(()=>import('./pages/Login'))
const SignUp = lazy(()=>import('./pages/SignUp'))

function App() {
    const {setUser} = useContext(authContext)

    // Recuperamos sesión del usuario
    useEffect(()=>{
      get("/api/auth/validate")
      .then(result=>{
        setUser({
          logged:true,
          user:result.user
        })
      })
      .catch(error=>console.log(error))
    },[setUser])

    return (
        <>
          <Navbar/>
          <ErrorBoundary>
            <Suspense fallback={<Loading/>}>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/hooks' element={<Hooks/>}/>
                <Route path='/callback' element={<Callback/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </>
    );
}

export default App;
