import React, { Component } from 'react'
import './index.css'
import Container from 'react-bootstrap/Container'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

class Manager extends Component {

  renderUser = user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.userName}</td>
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
    const { userList = [] } = this.props

    return (
      <Container>
        <Card className='card-margin'>
          <Card.Body>
            <Card.Title>Gerenciar Usuários</Card.Title>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Nome </th>
                  <th>Email </th>
                  <th>Login </th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
              {userList.map(this.renderUser)}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    )
  }
} 

export default Manager