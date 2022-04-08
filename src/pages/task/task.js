import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/navbar";
import { Form } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useValidate from "../../hooks/useValidate";
import { operariosService } from "../../services/user.services";
import { createtask } from "../../services/task.services";


const Task = () => {
    //todo validar que sea administrador localstorage

    const [lista, setLista] = useState([])
    const [task_name, setTask_name] = useState("")
    const [user_id, setUser_id] = useState("")
    useValidate()

    useEffect(() => {
        operariosService().then(list => {

            setLista(list.users)

        })

    }, [])

    const handleClickTask = () => {
        if (task_name !== "" && user_id !== "") {
            createtask(task_name, user_id).then(res => {
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
        <div>
            <NavBar />
            <div className="col-lg-12">
                <form className="card">
                    <div className="card-header">
                        <h4 className="card-title mb-0">{"Crear nueva tarea"}</h4>
                        <div className="card-options"><a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            <div className="col-sm-3 col-md-3">
                                <div className="form-group">
                                    <label className="form-label">{"Tarea"}</label>
                                    <input className="form-control" type="text" placeholder="Tarea" onChange={e => setTask_name(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3">
                                <label className="form-label">{"Operario"}</label>
                                <Form.Select aria-label="Default select example" onChange={e => setUser_id(e.target.value)}>
                                    <option value="">Select</option>
                                    {lista.length > 1 ? (lista.map((element, i) => (
                                        <option key={i} value={element.id}>{element.name}</option>
                                    ))) : (<></>)}

                                </Form.Select>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer text-right">
                        <button className="btn btn-primary" type="button" onClick={handleClickTask} >{"Crear Tarea"}</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Task