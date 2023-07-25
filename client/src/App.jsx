import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import ForgotPassword from './Components/Forgotpassword/Forgotpassword';
import Passwordreset from './Components/PasswordReset/Passwordreset';
import Home from './Components/Home/Home';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from './axios';
function App() {
  const {user} = useSelector(state => state)
  axios.defaults.withCredentials = true;

//   useEffect(() => {
//     axios.get('/auth').then((response)=>{
//  console.log(response.data);
//     }).catch((error)=>{
//       console.log(error);
//     })
//   }, [user])
  console.log("%%",user);
  return (
    <>

        <Router>
        <Routes>
         <Route path='/login' element={<Login/>} /> 
         <Route path='/signup' element={<Signup/>} />
         <Route path='/forgotpassword' element={<ForgotPassword/>} />
         <Route path='/resetpassword' element={<Passwordreset/>} />
         <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
