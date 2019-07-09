import React, { Component } from 'react'
import TicketContainer from '../../../../Containers/Access/Ticket'
import TicketService from '../../../../services/ticket'

class Ticket extends Component {
  ticketService = null
  state = {
    ticketData: {
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
    },
    isLoading: false,
  }


  componentDidMount() {
    this.ticketService = new TicketService()
    this.handleTicket()
  }

  handleTicket = () => {
    const id = Number(this.props.match.params.id)
    this.ticketService
      .ticketId(id)
      .then(({ data: ticketData }) => this.setState({ ticketData }))

  }

  handlePrint = () => {
    return window.print()
  }

  render() {
    const {
      ticketData,
      isLoading,
    } = this.state
    return (
      <TicketContainer 
        handlePrint={this.handlePrint}
        ticketData={ticketData}
        isLoading={isLoading}
      />
    )
  }
}

export default Ticket