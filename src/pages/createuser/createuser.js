import React, { useState } from 'react'
import NavBar from '../../components/NavBar/navbar';
import { ToastContainer, toast } from 'react-toastify';
import { registro } from '../../services/user.services';


const Createuser = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Administrador");


    return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="text-center">{"Registro"}</h4>
                                <h6 className="text-center">{"Ingrese su correo y contraseña para registrarse"}</h6>
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-12 ">
                                            <div className="form-group">
                                                <label className="col-form-label">{"Nombre"}</label>
                                                <input className="form-control" type="text" onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div className="form-group">
                                                <label className="col-form-label">{"Apellido"}</label>
                                                <input className="form-control" type="text" onChange={e => setApellido(e.target.value)} placeholder="Apellido" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">{"Email"}</label>
                                        <input className="form-control" type="email" onChange={e => setEmail(e.target.value)} placeholder="@campus.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">{"Contraseña"}</label>
                                        <input className="form-control" type="password" onChange={e => setPassword(e.target.value)} placeholder="**********" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">{"Rol"}</label>
                                        <div className="form-row">
                                            <div className="col-sm-4">
                                                <select className="form-control mb-1" onChange={(e) => setRole(e.target.value)}>
                                                    <option value="Administrador">{"Administrador"}</option>
                                                    <option value="Operario">{"Operario"}</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-sm-4">
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                onClick={() => {
                                                    if (nombre !== "" & apellido !== "" & email !== "" & password !== "" & role !== "") {
                                                        registro(nombre, apellido, email, password, role)
                                                            .then((user) => {
                                                                if (user.errors) {
                                                                    toast.error(user.errors[0].msg)
                                                                    setTimeout(() => {
                                                                        console.log("1")
                                                                        // window.location.href = `${process.env.PUBLIC_URL}/createuser`
                                                                    }, 800);
                                                                } else {
                                                                    toast.success("Usuario Registrado!")
                                                                    setTimeout(() => {
                                                                        console.log("2")
                                                                        // window.location.href = `${process.env.PUBLIC_URL}/home`
                                                                    }, 600);
                                                                }

                                                            })
                                                            .catch(() => {
                                                                toast.error("Error al Registrar Usuario")
                                                                setTimeout(() => {
                                                                    console.log("3")
                                                                    // window.location.href = `${process.env.PUBLIC_URL}/createuser`
                                                                }, 600);
                                                            })
                                                    } else { toast.info("Debe llenar todos los campos") }
                                                }}
                                            >Registrar Usuario</button>
                                            <ToastContainer />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- sign up page ends--> */}
            </div>
        </div>
    )
}



export default Createuser