import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../../components/NavBar/navbar";
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import useValidate from "../../hooks/useValidate";
import { alltaskadminService, alltaskService } from "../../services/task.services";
const Task_list = () => {

    useValidate()
    const [lista_tareas, setLista_tareas] = useState([])

    const rol = localStorage.getItem('rol')

    useEffect(() => {
        if (rol === "Administrador") {
            alltaskadminService().then(lista => {
                const nueva_lista = []
                lista.tarea.forEach(element => {
                    nueva_lista.push({ id: element._id, task_name: element.task_name, state: element.task_state })
                });
                setLista_tareas(nueva_lista)
            })

        } else {
            alltaskService(localStorage.getItem('token')).then(lista => {
                const nueva_lista = []
                lista.tarea.forEach(element => {
                    nueva_lista.push({ id: element._id, task_name: element.task_name, state: element.task_state })
                });
                setLista_tareas(nueva_lista)
            })
        }
    }, [])





    const columns = useMemo(() => [
        {
            name: 'Tarea',
            selector: 'task_name',
            sortable: true,
            center: true,
        },
        {
            name: "Estado",
            selector: 'state',
            sortable: true,
            center: true,
        },
        {
            cell: (row) => <Link to={`/taskedit/${row.id}`}><button className="btn btn-primary btn-xs">Modificar</button></Link>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },

    ]);

    const EstiloTabla = {
        table: {
            style: {
                color: '#000000',
                backgroundColor: '#c3c3c3',
            },
        },
        tableWrapper: {
            style: {
                display: 'table',
            },
        },
        headRow: {
            style: {
                backgroundColor: '#000000',
                minHeight: '56px',
                borderBottomWidth: '1px',
                borderBottomColor: '#ffffff',
                borderBottomStyle: 'solid',
            },
            denseStyle: {
                minHeight: '32px',
            },
        },
        headCells: {
            style: {
                fontSize: '12px',
                fontWeight: 500,
                color: '#ffffff',
                paddingLeft: '16px',
                paddingRight: '16px',
            },
            activeSortStyle: {
                color: '#ffffff',
                '&:focus': {
                    outline: 'none',
                },
                '&:hover:not(:focus)': {
                    color: '#ffffff'
                },
            },
            inactiveSortStyle: {
                '&:focus': {
                    outline: 'none',
                    color: '#ffffff',
                },
                '&:hover': {
                    color: '#ffffff',
                },
            },
        },

    };

    return (

        <div className="taskList">
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body datatable-react">
                                <DataTable
                                    title="Lista de tareas Registradas"
                                    columns={columns}
                                    data={lista_tareas}
                                    striped={true}
                                    center={true}
                                    responsive={true}
                                    noDataComponent={<div>Cargando Tabla</div>}
                                    
                                    customStyles={EstiloTabla}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Task_list