import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={'/'}>Название сайта</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> 
              <Link to={'/'}>Главная</Link>
            </Nav.Link>
            <Nav.Link> 
              <Link to={'/about'}>Список товаров</Link>
            </Nav.Link>
            <Nav.Link> 
              <Link to={'/description'}>Описание</Link>
            </Nav.Link>
            <Nav.Link> 
              <Link to={'/form'}>Форма обратной связи</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar