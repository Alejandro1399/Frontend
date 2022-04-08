import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap"

import './profile.scss'

import NavBar from '../../components/NavBar/navbar'
import useValidate from "../../hooks/useValidate";
import { profileService } from "../../services/user.services";
const Profile = () => {
    useValidate()
    const id = localStorage.getItem('token')
    const [img, setImg] = useState(localStorage.getItem('img'))
    const [name, setName] = useState(localStorage.getItem('name'))
    const [role, setRole] = useState(localStorage.getItem('rol'))
    const [email, setEmail] = useState(localStorage.getItem('email'))


    const setSelectedFile = (imagen) => {
        let reader = new FileReader(); //El objeto FileReader permite que las aplicaciones web lean ficheros
        reader.onload = (event) => {
            setImg(event.target.result)
        };
        reader.readAsDataURL(imagen);
    }

    const actualizar = () => {
        profileService(id, name, email, role).then(user => {
            localStorage.setItem('email', email)
            localStorage.setItem('rol', role)
            localStorage.setItem('img', img)
            localStorage.setItem('name', name)
        })
    }

    return (
        <div className="profile">
            <NavBar />
            <div className="container-fluid">
                <div className="edit-profile">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">{"Mi Perfil"}</h4>
                                    <div className="card-options">
                                        <a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row mb-2">
                                            <div className="col-auto"><img className="img_70_rounded_circle" alt="" src={img ? (img) : ("https://www.un.org/sites/un2.un.org/files/user.png")} /></div>
                                            <div className="col">
                                                <h3 className="mb-1">{`${name}`}</h3>
                                                <p className="mb-4">{`Rol : ${role}`}</p>
                                                <p className="mb-1">{`Correo : ${email}`}</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">{"Editar perfil"}</h4>
                                    <div className="card-options"><a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-auto">
                                            <img className="img_70_rounded_circle" alt="" src={img ? (img) : ("https://www.un.org/sites/un2.un.org/files/user.png")} />
                                            <input
                                                type="file"
                                                accept="image/jpg, image/png, image/jpeg"
                                                onChange={(e) => setSelectedFile(e.target.files[0])} />
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">{"Nombre"}</label>
                                                <input className="form-control" type="text" placeholder="Username" onChange={e => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">{"EmailAddress"}</label>
                                                <input className="form-control" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <label className="form-label">{"Rol"}</label>
                                            <Form.Select aria-label="Default select example" onChange={e => setRole(e.target.value)} >
                                                <option value={localStorage.getItem('rol')} >Seleccione</option>
                                                <option value="Administrador">Administrador</option>
                                                <option value="Operario">Operario</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-primary" type="button" onClick={actualizar}>Actualizar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profile