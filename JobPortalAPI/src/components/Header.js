import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'


const Header = () => {

    return(
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Container>
                <Navbar.Brand href="/">Jobfinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#">Find Jobs</Nav.Link>
                    <Nav.Link href="#">Company Reviews</Nav.Link>
                    <NavDropdown title="Job type" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Full Time</NavDropdown.Item>
                        <NavDropdown.Item href="#">Part Time</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default Header