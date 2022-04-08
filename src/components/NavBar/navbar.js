import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../../pages/home/home"

const NavBar = () => {
    const rol = localStorage.getItem('rol');
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Decimetrix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/profile">Editar usuario</Nav.Link>
                        {rol == "Administrador" ? (
                            <>
                                <Nav.Link href="/createuser">Registrar usuario</Nav.Link>
                                <Nav.Link href="/task">Asignacion de tareas</Nav.Link>

                            </>) : (<></>)
                        }
                        <Nav.Link href="/tasklist">Lista de tareas</Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar