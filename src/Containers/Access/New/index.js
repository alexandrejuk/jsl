import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Banner_1 } from '../../../assets/'
import './index.css'

class New extends Component {

  state = {
    driverName: null,
    documentId: null,
    cpf: null,
    plate: null,
    brand: null,
    model: null,
  }

  handlerFormTicket = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  sendFormDate = () => {
    this.props.handleSubmit(this.state)
  }

  renderOperation = ({ id, description }) => (
    <option key={id} value={id}>
      {description}
    </option>
  )
  render() {
    const { operationList } = this.props
    return (
      <>
        <img style={{ width: '100%'}} src={Banner_1} alt='banner-1' />
        <Container>
          <Card className='card-position-access'>
            <Card.Body>
              <Card.Title>Ticket Acesso</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFabric">
                    <Form.Label>Operação</Form.Label>
                    <Form.Control 
                      as="select" 
                      name="operationId" 
                      onChange={this.handlerFormTicket}
                    >
                      <option>Escolha a Operação</option>
                      {operationList.map(this.renderOperation)}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Tipo de Serviço</Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        inline
                        type="radio"
                        label="Carregar"
                        name="service"
                        value="loading"
                        onChange={this.handlerFormTicket}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="Descarregar"
                        name="service"
                        value="unload"
                        onChange={this.handlerFormTicket}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="Carregar + Descarregar"
                        name="service"
                        value="loading_unload"
                        onChange={this.handlerFormTicket}
                      />
                    </Col>
                  </Form.Group>
                  </Form.Row>
                </Form>
              </Card.Subtitle>

                <Form>
                  <Card.Title>Dados Motorista</Card.Title>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="insira o nome completo" 
                        name="name" 
                        onChange={this.handlerFormTicket}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDocumentId">
                      <Form.Label>RG</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="insira o rg"
                        name="documentId" 
                        onChange={this.handlerFormTicket}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDocumentId">
                      <Form.Label>CPF</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="insira o cpf" 
                        name="cpf"
                        onChange={this.handlerFormTicket}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Card.Title>Dados Veículo</Card.Title>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPlaca">
                      <Form.Label>Placa</Form.Label>
                      <Form.Control 
                        type="text"
                        placeholder="insira a placa"
                        name="plate"
                        onChange={this.handlerFormTicket}
                      />
                    </Form.Group>
    
                    <Form.Group as={Col} controlId="formGridModel">
                      <Form.Label>Marca/Modelo</Form.Label>
                      <Form.Control 
                        type="text"
                        placeholder="insira a marca e modelo" 
                        name="model"
                        onChange={this.handlerFormTicket}
                      />
                    </Form.Group>
    
                    <Form.Group as={Col} controlId="formGridFabric">
                      <Form.Label>Fabricante</Form.Label>
                      <Form.Control 
                        as="select" 
                        name="brand" 
                        onChange={this.handlerFormTicket}
                      >
                        <option>Escolha o fabricante</option>
                        <option value="FORD">FORD</option>
                        <option value="GM">GM</option>
                        <option value="VOLVO">VOLVO</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <Button  variant='outline-primary' onClick={this.sendFormDate}>
                    Check-in
                  </Button>

                </Form>
       
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
} 

export default New