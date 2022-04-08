import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useValidate from "./hooks/useValidate";
import Home from "./pages/home/home";


const App = () => {

  // Todo Validar si el usuario ya inicio sesion con el localStorage


  useValidate('home')


  return (
    <div >
      <Home />

      <ToastContainer />
    </div>
  );
}

export default App;
