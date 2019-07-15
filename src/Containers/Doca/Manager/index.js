import React, { Component } from 'react'
import './index.css'
import Container from 'react-bootstrap/Container'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

class Manager extends Component {
  
  statusDocaColor = {
    available: 'success',
    operation: 'danger',
  }

  statusDocaType = {
    available: 'Disponível',
    operation: 'Em Operação',
  }

  renderDoca = doca => (
    <tr key={doca.id}>
      <td>{doca.description} {doca.docaNumber} </td>
      <td>
        <Badge className="size-budge-custom" variant={this.statusDocaColor[doca.status]}>
          {this.statusDocaType[doca.status]}
        </Badge>
      </td>
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
    const { docaList } = this.props

    return (
      <Container>
        <Card className='card-margin'>
          <Card.Body>
            <Card.Title>Gerenciar Docas</Card.Title>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Doca </th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
              {docaList.map(this.renderDoca)}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    )
  }
} 

export default Manager