import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/home";
import Signin from './pages/login/signin'
import Profile from "./pages/profile/profile";
import Error404 from './pages/error404';
import Task from './pages/task/task';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/task" element={<Task/>} />
        <Route path="/taskedit" element={<Profile />} />
        <Route path="/tasklist" element={<Profile />} />
        <Route path='*' exact={true} element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
