import React, { Component } from 'react'
import NewContainer from '../../../../Containers/Access/New'
import TicketService from '../../../../services/ticket'
import { Redirect } from 'react-router-dom'
import OperationService from '../../../../services/operation';

class New extends Component {
  ticketService = null
  operationService = null
  initialStatus = 'waiting_service'

  state = {
    isLoading: false,
    redirect: false,
    ticketId: null,
    operationList: []
  }

  componentDidMount() {
    this.ticketService = new TicketService()
    this.operationService = new OperationService()
    this.handleOperations()
  }

  parserDateForm = value => ({
    driver: {
      name: value.name,
      documentId: value.documentId,
      cpf: value.cpf,
    },
    operationId: value.operationId,
    service: value.service,
    vehicle: {
      plate: value.plate,
      brand: value.brand,
      model: value.model,
    },
    status: this.initialStatus,
    docaId: null,
    barCode: '123'
  })

  handleOperations() {
    this.operationService
      .operations()
      .then(({ data: operationList }) => this.setState({ operationList }))
  }
  saveNewTicket = value => {
    this.ticketService
      .saveTicket(this.parserDateForm(value))
      .then(({ data }) => {
        this.setState({ ticketId: data.id, redirect: true })
      })
  }

  render() {
    const { 
      isLoading, 
      ticketId, 
      redirect,
      operationList
    } = this.state
    return (
      <>
        <NewContainer 
          handleSubmit={this.saveNewTicket}
          isLoading={isLoading}
          operationList={operationList}
        />
        {
          redirect ? 
          <Redirect to={`/logged/access/ticket/${ticketId}`} /> : 
          null
        }
      </>
    ) 
  }
}
 
export default New