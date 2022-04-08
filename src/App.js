import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/home";
import Signin from './pages/login/signin'
import Profile from "./pages/profile/profile";

const App = () => {

  // Todo Validar si el usuario ya inicio sesion con el localStorage
  const [sesion, setSesion] = useState(true)


  return (
    <div >
      {sesion ? (<Home />) : (<Signin />)}
      
      <ToastContainer />
    </div>
  );
}

export default App;
