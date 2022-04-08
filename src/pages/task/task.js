import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/navbar";
import {Form} from "react-bootstrap"
import { toast } from "react-toastify";


const Task = () => {
    //todo validar que sea administrador localstorage



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
                                    <input className="form-control" type="text" placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3">
                            <label className="form-label">{"Operario"}</label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer text-right">
                        <button className="btn btn-primary" type="submit">{"Crear Tarea"}</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Task