import React, { Component } from 'react'
import TicketContainer from '../../../../Containers/Access/Ticket'

class Ticket extends Component {

  state = {
    ticketData: {},
    isLoading: false,
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