import React from 'react'
import './index.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

const renderTicket = ticket => (
  <tr key={ticket.id}>
    <td>{ticket.ticketId}</td>
    <td>{ticket.driverName}</td>
    <td>{ticket.operationService}</td>
    <td>{ticket.vehicleInfo.model}</td>
    <td>{ticket.status}</td>
    <td></td>
  </tr>
)

const Manager = ({ ticketList }) => (
  <Container>
    <Card>
      <br/>
      <br/>
      <br/>
      <h4>Gerenciador de Acesso!</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ticket Id</th>
            <th>Motorista</th>
            <th>Serviço</th>
            <th>Operação</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
         {ticketList.map(renderTicket)}
        </tbody>
      </Table>
    </Card>
  </Container>
)

export default Manager