import React from 'react'
import './index.css'
import { Logo } from '../../assets/'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

const NarBar = () => (
  <nav className='no-print'>
    <div className="header-company">
      <div className="header-company-logo">
        <img  className="header-company-logo-image" src={Logo} alt='logo company'/>
      </div>
    </div>
    <div className="nav-bar-jsl">
      <Container>
        <Nav activeKey="1">
          <Nav.Item className='navbar-jsl-item'>
            <Nav.Link eventKey="1" href="#logged/access/new" className='navbar-jsl-item-link'>
              CHECK-IN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item  className='navbar-jsl-item'>
            <Nav.Link eventKey="2" href="#logged/access/manager" title="Item" className='navbar-jsl-item-link'>
              GERENCIAR
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="DOCA&nbsp;" id="nav-dropdown" className='navbar-jsl-item navbar-jsl-item-link'>
            <NavDropdown.Item  href="#logged/access/doca/new" eventKey="4.1" className='navbar-jsl-item-link'>NOVA</NavDropdown.Item>
            <NavDropdown.Item  href="#logged/access/doca/manager" eventKey="4.2"className='navbar-jsl-item-link'>GERENCIAR</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="OPERAÇÃO&nbsp;" id="nav-dropdown" className='navbar-jsl-item navbar-jsl-item-link'>
            <NavDropdown.Item  href="#logged/operation/new" eventKey="4.1" className='navbar-jsl-item-link'>NOVA</NavDropdown.Item>
            <NavDropdown.Item  href="#logged/operation/manager" eventKey="4.2"className='navbar-jsl-item-link'>GERENCIAR</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="USUÁRIO&nbsp;" id="nav-dropdown" className='navbar-jsl-item navbar-jsl-item-link'>
            <NavDropdown.Item  href="#logged/user/new" eventKey="4.1" className='navbar-jsl-item-link'>NOVA</NavDropdown.Item>
            <NavDropdown.Item  href="#logged/user/manager" eventKey="4.2"className='navbar-jsl-item-link'>GERENCIAR</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </div>
  </nav>
) 
 
export default NarBar