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
      name: this.checkIsEmpty(value.name, 'Preencha o campo nome!'),
      documentId: this.checkIsEmpty(value.documentId, 'Preencha o campo RG!'),
      cpf: this.checkIsEmpty(value.cpf, 'Preencha o campo CPF!'),
    },
    operationId: this.checkIsEmpty(value.operationId, 'Selecione a Operação!'),
    service: this.checkIsEmpty(value.service, 'Selecione o Serviço!'), 
    vehicle: {
      plate: this.checkIsEmpty(value.plate, 'Preencha o campo Placa do Veículo!'),  
      brand: this.checkIsEmpty(value.brand, 'Selecione a Fabricante do Veículo!'),
      model: this.checkIsEmpty(value.model, 'Preencha o campo Modelo do Veículo!'),
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