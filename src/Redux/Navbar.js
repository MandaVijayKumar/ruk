import React from 'react'
import { Link } from 'react-router-dom'
import {Nav, Navbar, Container} from 'react-bootstrap'

function Navbars() {
  return (
    <nav>
        <Navbar bg="danger" expand="lg">
  <Container>
    <Navbar.Brand href="/"><Link to='/'>Vijay Kumar</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        
        <Nav.Link href='/'><Link to='/'>Home</Link></Nav.Link>
        <Nav.Link href='employees'><Link to='/employees'>Employees</Link></Nav.Link>
        <Nav.Link href='/counter'><Link to='/counter'>Counter</Link></Nav.Link>
        <Nav.Link href='/counter'><Link to='/users'>Users</Link></Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </nav>
  )
}

export default Navbars