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
      userName: null,
      name: null,
      email: null,
      password: '123456'
    },
    clicked: false
  }

  handlerFormStaff = (e) => {
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
      if(values[key] && values[key].length >= 3) {
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

  render() {
    const { form, clicked } = this.state
    return (
      <Container>
        <Card className='card-form-staff'>
          <Card.Body>
            <Form className='form-staff'>
                <Col sm={12}>
                  <Card.Title className='no-padding'>Dados Usuário</Card.Title>
                </Col>
                <Form.Row>
                <Col className='form-margin-staff' sm={12}>
                  <Form.Label>Nome</Form.Label>
                </Col>
                <Col className='form-margin-staff' sm={12}>
                  <Form.Control name='name' type="text" placeholder="insira o nome completo"  onChange={this.handlerFormStaff}/>
                  { clicked && !form.name? <span className='alert-info-form'>x campo obrigatório!</span> : null}     
                </Col>
                <Col className='form-margin-staff' sm={12}>
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col className='form-margin-staff' sm={12}>
                  <Form.Control name='email' type="email" placeholder="insira o email"  onChange={this.handlerFormStaff}/>
                  { clicked && !form.email? <span className='alert-info-form'>x campo obrigatório!</span> : null}     
                </Col>
                <Col className='form-margin-staff' sm={12}>
                  <Form.Label>Login</Form.Label>
                </Col>
                <Col className='form-margin-staff' sm={12}>
                  <Form.Control name='userName' type="text" placeholder="insira o nome do usuário"  onChange={this.handlerFormStaff}/>
                  { clicked && !form.userName? <span className='alert-info-form'>x campo obrigatório!</span> : null}     
                </Col>
                <Col className='form-margin-staff' sm={12}>
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