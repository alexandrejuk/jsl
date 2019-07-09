import React, { Component } from 'react'
import ManagerContainer from '../../../../Containers/Access/manager'
import TicketService from '../../../../services/ticket'

class Manager extends Component {
  ticketService = null
  state = {
    isLoading: false,
    ticketList: [],
  }
  
  componentDidMount() {
    this.ticketService = new TicketService()
    this.handleListTickets()
  }

  handleListTickets = () => {
    this.ticketService
      .tickets()
      .then(({ data: ticketList }) => this.setState({ ticketList }))
  }

  render() {
    const {
      isLoading,
      ticketList,
    } = this.state

    return (
      <ManagerContainer 
        ticketList={ticketList}
        isLoading={isLoading}
      />
    )
  }
}

export default Manager
