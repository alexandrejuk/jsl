import React, { Component } from 'react'
import ManagerContainer from '../../../../Containers/Access/Manager'
import TicketService from '../../../../services/ticket'
import Notiflix from 'notiflix-react'

class Manager extends Component {
  ticketService = null
  state = {
    isLoading: false,
    ticketList: [],
  }
  
  componentDidMount() {
    this.ticketService = new TicketService()
    this.handleListTickets()
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  handleListTickets = async () => {
    try {
      const { data: ticketList } = await this.ticketService.tickets()
      this.setState({ ticketList })
    } catch (error) {
      Notiflix.Notify.Failure('Não foi possível recuperar os Tickets!')    
    }
  }

  handleFinalyTicket = async (barCode, docaId) => {
    try {
      await this.ticketService.updateTicket({ docaId, barCode })
      this.handleListTickets()
      Notiflix.Notify.Success('Ticket concluído com sucesso!')
    } catch (error) {
      Notiflix.Notify.Failure('Não foi possível concluir o Ticket!')
    }
  }

  handleCancelTicket = async (barCode) => {
    try {
      await this.ticketService.updateTicket({ barCode })
      this.handleListTickets()
      Notiflix.Notify.Success('Ticket cancelado com sucesso!')
    } catch (error) {
      Notiflix.Notify.Failure('Não foi possível cancelar o Ticket!')
    }
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
        handleCancelTicket={this.handleCancelTicket}
        handleFinalyTicket={this.handleFinalyTicket}
      />
    )
  }
}

export default Manager
