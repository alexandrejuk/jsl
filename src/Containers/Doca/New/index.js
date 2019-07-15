import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './index.css'

class New extends Component { 

  state = {
    form: {
      name: 'Doca',
      docaNumber: null,
    },
    clicked: false
  }

  handlerFormDoca = (e) => {
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
      if(values[key]) {
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
    if(this.state.docaNumber > 0) {
      this.props.handleSubmit(form)
    }
  }

  render() {
    const { form, clicked } = this.state
    return (
      <Container>
        <Card className='card-form-doca'>
          <Card.Body>
            <Form className='form-doca'>
                <Col sm={12}>
                  <Card.Title className='no-padding'>Dados Operação</Card.Title>
                </Col>
                <Form.Row>
                <Col className='form-margin-doca' sm={12}>
                  <Form.Label>Descrição</Form.Label>
                </Col>
                <Col className='form-margin-doca' sm={12}>
                  <Form.Control name='name' type="text" value='Doca'readOnly={true}/> 
                </Col>
                <Col className='form-margin-doca' sm={12}>
                  <Form.Control
                    name='docaNumber' 
                    type="number"
                    placeholder="insira o número da doca"
                    onChange={this.handlerFormDoca}/>
                  { clicked && !form.name? <span className='alert-info-form'>x campo obrigatório!</span> : null}     
                </Col>
                <Col className='form-margin-doca' sm={12}>
                  <Button  variant='outline-primary' onClick={this.clickFormSend}>
                    Salvar
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default New