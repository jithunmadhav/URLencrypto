import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import ForgotPassword from './Components/Forgotpassword/Forgotpassword';
import Passwordreset from './Components/PasswordReset/Passwordreset';
import Otpverification from './Components/Otpverification/Otpverification';
import Home from './Components/Home/Home';
function App() {
  return (
    <>
        <Router>
        <Routes>
         <Route path='/login' element={<Login/>} /> 
         <Route path='/signup' element={<Signup/>} />
         <Route path='/forgotpassword' element={<ForgotPassword/>} />
         <Route path='/resetpassword' element={<Passwordreset/>} />
         <Route path='/otp' element={<Otpverification/>} />
         <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
