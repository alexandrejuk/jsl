import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './index.css'

const New = () => (
  <Container fluid={true} style={{ backgroundColor: '#fff'}}>
    <Row>
      <Col style={{ margin: '40px auto 0 auto'}} md={8}>
        <h5>Dados Motorista</h5>
      </Col>
      <Col md={8} style={{ margin: 'auto'}}>
        <Form>
          <Form.Group controlId='formBasicCpf'>
            <Form.Label>CPF</Form.Label>
            <Form.Control type='text' required/>
            <Form.Control.Feedback type='invalid'>
             Campo obrigatório!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='formBasicNome'>
            <Form.Label>Nome</Form.Label>
            <Form.Control type='text' required/>
            <Form.Control.Feedback type='invalid'>
              Campo obrigatório!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='formBasicRg'>
            <Form.Label>RG</Form.Label>
            <Form.Control type='text' required/>
            <Form.Control.Feedback type='invalid'>
              Campo obrigatório!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='formBasicCNH'>
            <Form.Label>CNH</Form.Label>
            <Form.Control type='text' required/>
            <Form.Control.Feedback type='invalid'>
              Campo obrigatório!
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Col>
      <Col style={{ margin: '20px auto 0 auto'}} md={8}>
        <h5>Dados Veículo</h5>
      </Col>
      <Col md={8} style={{ margin: 'auto'}}>
        <Form>
          <Form.Group controlId='formBasicPlaca'>
            <Form.Label>Placa</Form.Label>
            <Form.Control type='text' required/>
            <Form.Control.Feedback type='invalid'>
              Campo obrigatório!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='formBasicModelo'>
            <Form.Label>Modelo</Form.Label>
            <Form.Control type='text' required/>
            <Form.Control.Feedback type='invalid'>
              Campo obrigatório!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='formBasicFabricante'>
            <Form.Label>Fabricante</Form.Label>
            <Form.Control type='text' required/>
            <Form.Control.Feedback type='invalid'>
              Campo obrigatório!
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Col>
      <Col style={{ margin: '20px auto 0 auto'}} md={8}>
        <h5>Serviço</h5>
      </Col>
      <Col style={{ margin: 'auto'}} md={8}>
        <div className='service-group'>
          <div className='service'>
            Carregar
          </div>
          <div className='service'>
            Descarregar
          </div>
          <div className='service'>
            Carregar<br/> + NF
          </div>
          <div className='service'>
            Descarregar<br/> + NF
          </div>
        </div>
      </Col>
      <Col style={{ margin: '20px auto'}} md={8}>
          <Button variant='outline-primary' size='lg' block>
            <Link to='/logged/access/ticket' className='no-sytle-link'>  
              Gerar Acesso
            </Link>
          </Button>
        <Button variant='outline-danger' size='lg' block>
          Limpar
        </Button>
      </Col>
      <Col style={{ textAlign: 'center',  margin: '20px 0' }} md={12}>
        <p>
          Ao clicar em Gerar Acesso você está de acordo com nossa
          <span style={{ color: '#C8001D'}}>
            <br/>Política de Privacidade e Uso de Informações
          </span>.
        </p>
      </Col>
    </Row>
  </Container>
)

export default New