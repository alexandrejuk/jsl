import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Banner_1 } from '../../../assets/'
import './index.css'

class New extends Component {

  state = {
    form: {
      name: null,
      documentId: null,
      cpf: null,
      plate: null,
      brand: null,
      model: null,
      service: null,
      operationId: null,
    },
    clicked: false,
  }

  handlerFormTicket = (e) => {
    const { name, value } = e.target
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  isEmpty(values) {
    let fields = [];
    for(let key in values) {
      if(values[key] && values[key].length >= 7) {
        fields = [...fields, { field: true }]
      }else {
        fields = [...fields, { field: false}]
      }
    }

    if(fields.find(v => !v.field)) {
      return false;
    }else {
      return true;
    }
  }

  clickFormSend = () => {
    this.setState({ clicked: true }, this.sendFormDate)
  }

  sendFormDate = () => {
    const { form } = this.state
    const valid = this.isEmpty(form)
    
    if(valid) {
      this.props.handleSubmit(form)
    }
  }

  renderOperation = ({ id, description }) => (
    <option key={id} value={id}>
      {description}
    </option>
  )
  render() {
    const { form } = this.state
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
                   { 
                     this.state.clicked && !form.operationId ? <span className='alert-info-form'>x campo obrigatório!</span> : null}
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
                    { 
                      this.state.clicked && !form.service 
                      ? <span className='alert-info-form'>x campo obrigatório!</span> : null
                    }
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
                     { this.state.clicked && !form.name? <span className='alert-info-form'>x campo obrigatório!</span> : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDocumentId">
                      <Form.Label>RG</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="insira o rg"
                        name="documentId" 
                        onChange={this.handlerFormTicket}
                      />
                     { this.state.clicked && !form.documentId? <span className='alert-info-form'>x campo obrigatório!</span> : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDocumentId">
                      <Form.Label>CPF</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="insira o cpf" 
                        name="cpf"
                        onChange={this.handlerFormTicket}
                      />
                     { this.state.clicked && !form.cpf? <span className='alert-info-form'>x campo obrigatório!</span> : null}
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
                     { this.state.clicked && !form.plate? <span className='alert-info-form'>x campo obrigatório!</span> : null}
                    </Form.Group>
    
                    <Form.Group as={Col} controlId="formGridModel">
                      <Form.Label>Modelo</Form.Label>
                      <Form.Control 
                        type="text"
                        placeholder="insira o modelo" 
                        name="model"
                        onChange={this.handlerFormTicket}
                      />
                     { this.state.clicked && !form.model? <span className='alert-info-form'>x campo obrigatório!</span> : null}
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
                     { this.state.clicked && !form.brand? <span className='alert-info-form'>x campo obrigatório!</span> : null}
                    </Form.Group>
                  </Form.Row>

                  <Button  variant='outline-primary' onClick={this.clickFormSend}>
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