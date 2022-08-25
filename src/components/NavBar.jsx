import React from 'react'
import CartWidget from './CartWidget'
import styles from './NavBar.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
  return (
    
    <nav className={styles.nav}>
    <Navbar bg="dark" variant="dark">
    <ul>
    <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About us</Nav.Link>
            <Nav.Link href="/">For Man</Nav.Link>
            <Nav.Link href="/">For Woman</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            <CartWidget className></CartWidget>
          </Nav>
        </Container>
    </ul>
    </Navbar>
    </nav>
  )
}

export default NavBar