import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Container from 'react-bootstrap/Container'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

import ModalTicketAccess from '../../../Components/ModalTicketAccess'
import ModalTicketAccessBarCode from '../../../Components/ModalTicketAccessBarCode'

class Manager extends Component {

  state = {
    showModal: false,
    showModalBarCode: false,
    ticketSelected: {
      id: null,
      driverName: null,
      documentId: null,
      cpf: null,
      vehicleInfo: {
        plate: null,
        brand: null,
        model: null,
      },
      securityCode: null,
      status: null,
      ticketId: null,
      createdTicketDate: null,
      operationService: null,
      access: {
        id: null,
        driverId: null,
        initialDate: null,
        initialOperationDate: null,
        finalyOperationDate: null,
        finalyDate: null,
      }
    }
  }

  handleShowModal = (ticketSelected = {}) => {
    this.setState({ showModal: !this.state.showModal, ticketSelected })
  }
  handleCloseModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  handleShowModalBarCode = (ticketSelected = {}) => {
    this.setState({ showModalBarCode: !this.state.showModalBarCode })
  }

  renderTicket = ticket => (
    <tr key={ticket.id}>
      <td>{ticket.ticketId}</td>
      <td>{ticket.driverName}</td>
      <td>{ticket.operationService}</td>
      <td>{ticket.vehicleInfo.model}</td>
      <td>
        <Badge pill variant='success'>
          {ticket.status}
        </Badge>
      </td>
      <td>
        <ButtonToolbar>
          <Button 
            className="magitn-button" 
            variant="outline-info" 
            onClick={() => this.handleShowModal(ticket)}
          >
            <i className="fa fa-eye" aria-hidden="true"></i>
          </Button>
          <Link to={`/logged/access/ticket/${ticket.id}`}>
            <Button className="magitn-button" variant="outline-info">
              <i className="fa fa-print" aria-hidden="true"></i>
            </Button>
          </Link>
          <Button className="magitn-button" variant="outline-info" onClick={this.handleShowModalBarCode}>
            <i className="fa fa-barcode" aria-hidden="true"></i>
          </Button>
          <Button className="magitn-button" variant="outline-danger">
            <i className="fa fa-times" aria-hidden="true"></i>
          </Button>
          <Button className="magitn-button" variant="outline-success">
            <i className="fa fa-check" aria-hidden="true"></i>
          </Button>
        </ButtonToolbar>
      </td>
    </tr>
  )

  render() {
    const { ticketSelected, showModal, showModalBarCode } = this.state
    const { ticketList } = this.props
    return (
      <Container>
        <Card className='card-margin'>
          <Card.Body>
            <Card.Title>Gerenciar Acessos</Card.Title>
            <Table responsive hover>
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
              {ticketList.map(this.renderTicket)}
              </tbody>
            </Table>
            <ModalTicketAccess 
              show={showModal} 
              ticketSelected={ticketSelected} 
              handleCloseModal={this.handleCloseModal}/>
            <ModalTicketAccessBarCode 
              show={showModalBarCode} 
              handleShowModal={this.handleShowModalBarCode}
            />
          </Card.Body>
        </Card>
      </Container>
    )
  }
} 

export default Manager