import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { login } from "../../services/user.services"
import 'react-toastify/dist/ReactToastify.css';
import './signin.scss'

const Signin = () => {
    const [email, setEmail] = useState("prueba@gmail.com");
    const [password, setPassword] = useState("123456");

    const handleClickLogin = () => {
        login(email, password)
            .then(user => {
                if (user.token) {
                    localStorage.setItem('token', user._id)
                    localStorage.setItem('email', email)
                    localStorage.setItem('rol', user.role)
                    localStorage.setItem('img', user.img.data)
                    localStorage.setItem('name', user.name)

                    window.location.href = `${process.env.PUBLIC_URL}/home`
                    return user;
                }
                else {
                    toast.error("Oppss .. El usuario o la contraseña son incorrectos.");
                }
            })
    };


    return (
        <div className="signin">
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    {/* <!-- login page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center" />
                                        <div className="card mt-4">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h4>LOGIN</h4>
                                                    <h6>{'Ingrese su correo y contraseña'} </h6>
                                                </div>
                                                <form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">Email</label>
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            name="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="Email address"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">Contraseña</label>
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            name="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            placeholder="**********"
                                                        />
                                                    </div>
                                                    <div className="form-group form-row mt-3 mb-0 button-auth">
                                                        <div className="col-md-12">
                                                            <button
                                                                className="btn btn-secondary btn-block"
                                                                type="button"
                                                                onClick={handleClickLogin}
                                                            >
                                                                Iniciar Sesión
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};
export default Signin;