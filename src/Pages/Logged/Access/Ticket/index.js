import React, { Component } from 'react'
import TicketContainer from '../../../../Containers/Access/Ticket'
import TicketService from '../../../../services/ticket'

class Ticket extends Component {
  ticketService = null
  state = {
    ticketData:  {
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
    isLoading: false,
  }


  componentDidMount() {
    this.ticketService = new TicketService()
    this.handleTicket()
  }

  handleTicket = async () => {
    try {
      const id = this.props.match.params.id
      const { data: ticketData } = await this.ticketService.ticketId(id)
      this.setState({ ticketData })
    } catch (error) {
      console.log('error')
    }
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