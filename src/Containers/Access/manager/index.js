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
import ModalTicketAcessCancel from '../../../Components/ModalTicketAcessCancel'
import ModalTicketAcessFinaly from '../../../Components/ModalTicketAcessFinaly'

class Manager extends Component {

  state = {
    showModal: false,
    ticketSelected: {
      id: null,
      barCode: null,
      status: null,
      service: null,
      createdAt: null,
      updatedAt: null,
      companyId: null,
      operationId: null,
      driverId: null,
      vehicleId: null,
      driver: {
        id: null,
        name: null,
        documentId: null,
        cpf: null,
        createdAt: null,
        updatedAt: null,
      },
      vehicle: {
        id: null,
        model: null,
        brand: null,
        plate: null,
        createdAt: null,
        updatedAt: null,
      },
      operation: {
        id: null,
        description: null,
        createdAt: null,
        updatedAt: null,
        companyId: null,
      },
      ticketEvents: []
    },
    showModalCancel: false,
    showModalFinaly: false
  }

  handleShowModal = (ticketSelected = {}) => {
    this.setState({ showModal: !this.state.showModal, ticketSelected })
  }

  handleCloseModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  handleCloseModalCancel = () => {
    this.setState({ showModalCancel: !this.state.showModalCancel })
  }

  handleShowModalCancel = (ticketSelected = {}) => {
    this.setState({ showModalCancel: !this.state.showModalCancel, ticketSelected })
  }

  handleShowModalFinaly = (ticketSelected = {}) => {
    this.setState({ showModalFinaly: !this.state.showModalFinaly, ticketSelected })
  }
  
  handleCloseModalFinaly = () => {
    this.setState({ showModalFinaly: !this.state.showModalFinaly })
  }

  statusOperationType = {
    waiting_service: 'Entrada',
    start_service: 'Início Operação',
    ended_service: 'Fim Operação',
    completed: 'Concluído',
    cancel: 'Cancelado'
  }

  statusOperationColor = {
    waiting_service: 'secondary',
    start_service: 'warning',
    ended_service: 'info',
    completed: 'success',
    cancel: 'danger',
  }

  statusServiceType = {
    loading: 'Carregar',
    unload: 'Descarregar',
    loading_unload: 'Carregar + Descarregar',
  }

  renderTicket = ticket => (
    <tr key={ticket.id}>
      <td>{ticket.barCode}</td>
      <td>{ticket.driver.name}</td>
      <td>{this.statusServiceType[ticket.service]}</td>
      <td>Doca {ticket.docaNumber}</td>
      <td>{ticket.operation.description}</td>
      <td>
        <Badge className="size-budge-custom" variant={this.statusOperationColor[ticket.status]}>
          {this.statusOperationType[ticket.status]}
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
          {
            ticket.status === 'waiting_service'? 
            <Button 
              className="magitn-button" 
              variant="outline-danger"
              onClick={() => this.handleShowModalCancel(ticket)}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </Button> : null
          }
          {
            ticket.status === 'ended_service' ? 
            <Button 
              className="magitn-button" 
              variant="outline-success" 
              onClick={() => this.handleShowModalFinaly(ticket)}
            >
              <i className="fa fa-check" aria-hidden="true"></i>
            </Button> : null
          }
        </ButtonToolbar>
      </td>
    </tr>
  )

  render() {
    const { ticketSelected, showModal, showModalCancel, showModalFinaly } = this.state
    const { ticketList } = this.props

    return (
      <Container>
        <Card className='card-margin'>
          <Card.Body>
            <Card.Title>Gerenciar Acessos</Card.Title>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>TicketId</th>
                  <th>Motorista</th>
                  <th>Serviço</th>
                  <th>Doca</th>
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

              <ModalTicketAcessCancel 
                show={showModalCancel} 
                ticket={ticketSelected} 
                handleCloseModalCancel={this.handleCloseModalCancel}
                handleCancelTicket={this.props.handleCancelTicket}
              />
              <ModalTicketAcessFinaly 
                 show={showModalFinaly} 
                 ticket={ticketSelected} 
                 handleCloseModalFinaly={this.handleCloseModalFinaly}
                 handleFinalyTicket={this.props.handleFinalyTicket}
              />
          </Card.Body>
        </Card>
      </Container>
    )
  }
} 

export default Manager