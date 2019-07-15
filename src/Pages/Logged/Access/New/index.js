import React, { Component } from 'react'
import NewContainer from '../../../../Containers/Access/New'
import TicketService from '../../../../services/ticket'
import OperationService from '../../../../services/operation'
import Notiflix from 'notiflix-react'

class New extends Component {
  ticketService = null
  operationService = null
  initialStatus = 'waiting_service'

  state = {
    isLoading: false,
    operationList: []
  }

  componentDidMount() {
    this.ticketService = new TicketService()
    this.operationService = new OperationService()
    this.handleOperations()
    
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  checkIsEmpty = (value, message) => {
    if(!value) {
      return Notiflix.Notify.Failure(message)
    }
    return value
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
    barCode: '1234'
  })

  async handleOperations() {
    try {
      const { data: operationList } = await this.operationService.operations()
      this.setState({ operationList })
    } catch (error) {
      Notiflix.Notify.Failure('Não foi recuperar as operações!')
    }
  }
  saveNewTicket = async value => {
    const { history } = this.props
    try {
      const { data } = await this.ticketService.saveTicket(this.parserDateForm(value))
      Notiflix.Notify.Success('Ticket criado com sucesso!')
      history.push(`/logged/access/ticket/${data.id}`)
    } catch (error) {
      Notiflix.Notify.Failure('Não foi possível criar um ticket!')
    }
  }

  render() {
    const { 
      isLoading,
      operationList
    } = this.state
    return (
      <NewContainer 
        handleSubmit={this.saveNewTicket}
        isLoading={isLoading}
        operationList={operationList}
      />
    ) 
  }
}
 
export default New