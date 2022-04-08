import React, { useState } from "react";
import NavBar from "../../components/NavBar/navbar";
import { Container, Row, Col, Card, CardHeader, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import useValidate from "../../hooks/useValidate";
const Home = () => {
    const [activeTab, setActiveTab] = useState('1');

    useValidate()
    return (
        <div>
            <NavBar />
            <Container fluid={true}>
                <Row >
                    <Col  md={{ span: 6, offset: 3 }} xl="6 xl-100">
                        <Card>
                            <CardHeader>
                                <h5>{"Sobre esta app"}</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="tabbed-card">
                                    <Nav className="pull-right  nav-pills nav-primary">
                                        <NavItem>
                                            <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                                {"Home"}
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                                {"Editar Usuario"}
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                                {"Asignacion de tareas"}
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                                                {"Lista de tareas"}
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <p className="mb-0">{"Esta Aplicacion es el desarrollo de una prueba Técnica para Desarrollador Web Full-Stack la cual consiste en realizar el backend y frontend para la asignación y control de tareas a diferentes usuarios "}</p>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <p className="mb-0">{"Los usuarios tiene la opción para editar su información y subir o cambiar su foto de perfil."}</p>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <p className="mb-0">{"El Usuario administrador tendra permiso para crear y asignar tareas a los usuarios operarios"}</p>
                                        </TabPane>
                                        <TabPane tabId="5">
                                            <p className="mb-0">{"El Usuario administrador podra ver todas las tareas que existen en la base de datos mientras que el operario solo podra ver las tareas asignadas a el; ademas de esto El Usuario ya sea administrador u operario podra modificar el estado de una tarea ya sea de To do, In Progress, Done "}</p>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home 