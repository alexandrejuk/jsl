import React, { Component } from 'react'
import './index.css'
import Container from 'react-bootstrap/Container'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

class Manager extends Component {

  renderOperation = operation => (
    <tr key={operation.id}>
      <td>{operation.description}</td>
      <td>
        <ButtonToolbar>
          <Button 
            className="magitn-button" 
            variant="outline-info"
          >
            <i className="fa fa-eye" aria-hidden="true"></i>
          </Button>
        </ButtonToolbar>
      </td>
    </tr>
  )

  render() {
    const { operationList = [] } = this.props

    return (
      <Container>
        <Card className='card-margin'>
          <Card.Body>
            <Card.Title>Gerenciar Operações</Card.Title>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Nome da Operação</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
              {operationList.map(this.renderOperation)}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    )
  }
} 

export default Manager