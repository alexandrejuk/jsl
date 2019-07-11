import React, { Component } from 'react'
import NewContainer from '../../../../Containers/Access/New'
import TicketService from '../../../../services/ticket'
import { Redirect } from 'react-router-dom'

class New extends Component {
  ticketService = null
  initialStatus = "Aguardando Serviço"
  state = {
    isLoading: false,
    redirect: false,
    ticketId: null,
  }

  componentDidMount() {
    this.ticketService = new TicketService()
  }

  parserDateForm = value => ({
    driverName: value.driverName,
    documentId: value.documentId,
    cpf: value.cpf,
    operationService: value.operationService,
    operation: value.operation,
    vehicleInfo: {
      plate: value.plate,
      brand: value.brand,
      model: value.model,
    },
    securityCode: "0989982",
    status: this.initialStatus,
    ticketId: "489374892",
    createdTicketDate: new Date()
  })

  saveNewTicket = value => {
    this.ticketService
      .saveTicket(this.parserDateForm(value))
      .then(({ data }) => {
        this.setState({ ticketId: data.id, redirect: true })
      })
  }

  render() {
    const { isLoading, ticketId, redirect } = this.state
    return (
      <>
        <NewContainer 
          handleSubmit={this.saveNewTicket}
          isLoading={isLoading}
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