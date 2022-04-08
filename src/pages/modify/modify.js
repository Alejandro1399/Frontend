import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import NavBar from '../../components/NavBar/navbar'
import useValidate from "../../hooks/useValidate";
import { onetaskService, taskeditService } from "../../services/task.services";
import './modify.scss'
const Modify = () => {
    useValidate()
    const [tarea_nombre, setTarea_nombre] = useState("")
    const [usuario_nombre, setUsuario_nombre] = useState("")
    const [tarea_estado, setTarea_estado] = useState("")

    const { id } = useParams();

    useEffect(() => {
        onetaskService(id).then(info => {
            setTarea_nombre(info.tarea.task_name)
            setTarea_estado(info.tarea.task_state)
            setUsuario_nombre(info.usuario.name)
        })
    }, [])

    const actualizar = () => {
        if (tarea_nombre !== "" && tarea_estado !== "") {
            taskeditService(id, tarea_nombre, tarea_estado).then(res => {
                if (res.msg) {
                    toast.success(res.msg);

                } else {
                    toast.error("Oppss .. Algo salio mal");
                }
            })
        } else {
            toast.error("Debe llenar todos los campos");
        }
    }

    return (
        <div className="modify">
            <NavBar />
            <div className="container-fluid">

                <div className="edit-task">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">{"Tarea"}</h4>
                                    <div className="card-options">
                                        <a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row mb-2">

                                            <div className="col">
                                                <h3 className="mb-1">{tarea_nombre}</h3>
                                                <p className="mb-4">{`Estado de la tarea: ${tarea_estado}`}</p>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">{"Asignada a"}</label>
                                            <h3 className="mb-1">{usuario_nombre}</h3>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">{"Editar Tarea"}</h4>
                                    <div className="card-options"><a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3 col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">{"Tarea"}</label>
                                                <input className="form-control" type="text" placeholder="Nombre de la Tarea" onChange={e => setTarea_nombre(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-md-3">
                                            <label className="form-label">{"Estado"}</label>
                                            <Form.Select aria-label="Default select example" onChange={e => setTarea_estado(e.target.value)}>
                                                <option value="">select</option>
                                                <option value="To Do">To Do</option>
                                                <option value="in Progress">In Progress</option>
                                                <option value="Done">Done</option>
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


export default Modify