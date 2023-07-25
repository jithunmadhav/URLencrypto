import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import ForgotPassword from './Components/Forgotpassword/Forgotpassword';
function App() {
  return (
    <>
        <Router>
        <Routes>
         <Route path='/login' element={<Login/>} /> 
         <Route path='/signup' element={<Signup/>} />
         <Route path='/forgotpassword' element={<ForgotPassword/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
