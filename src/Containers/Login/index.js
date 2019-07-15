import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import './index.css'
import { Logo, Info } from '../../assets/'

const Login = () => (
  <div className='wrapper-login'>
    <div className='login-auth'>
      <div className='logo-company-login'>
        <img className='logo-company-login-img' src={Logo} alt='logo company' />
      </div>
      <div className='welcome-info'>
        <h1>Bem Vindo</h1>
      </div>
      <Form className='form-login'>
        <Form.Group controlId="formBasicEmail">
          <Col className='form-margin-login' sm={8}>
            <Form.Label>Usuário</Form.Label>
          </Col>
          <Col className='form-margin-login' sm={8}>
            <Form.Control type="text" placeholder="Usuário" />          
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Col className='form-margin-login' sm={8}>
            <Form.Label>Senha</Form.Label>
          </Col>
          <Col className='form-margin-login' sm={8}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Col className='form-margin-login' sm={8}>
          <Button className='button-login-form' variant="primary" type="submit">
            Login
          </Button>
        </Col>
      </Form>
    </div>
    <div className='info-auth'>
      <div className='info-auth-login-text'>
        <h4>Gestão de operações</h4>
        <p>Controle, rapidez e qualidade para o gerenciamento de suas operações.</p>
      </div>
      <div className='info-image-auth'>
        <img src={Info}  alt='flat marketing' />
      </div>
    </div>
  </div>
)

export default Login