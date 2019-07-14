import React, { Component } from 'react'
import DocaContainer from '../../../../Containers/Access/Doca'
import DocaService from '../../../../services/doca'
import TicketService from '../../../../services/ticket'
import Notiflix from 'notiflix-react'

class Doca extends Component {
  docaService = null
  ticketService = null
  state = {
    docas: [],
    selectDoca: null,
    show: false,
  }

  componentDidMount() {
    this.docaService = new DocaService()
    this.ticketService = new TicketService()
    this.handleDocas()
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  handleShowModalBarCode = () => {
    this.setState({ show: !this.state.show })
  }

  async handleDocas() {
    try {
      const { data: docas } = await this.docaService.docas()
      this.setState({ docas })    
    } catch (error) {
       Notiflix.Notify.Failure('Não foi recuperar as Docas!')
       
    }
  }
 
  handleUpdateDoca = async (barCode) => {
    try {
      const { selectDoca: docaId } = this.state
      const { data } = await this.ticketService.updateTicket({ docaId, barCode })
      if(!data) {
        Notiflix.Notify.Failure('Não ticket pode ser iníciao para a doca selecionada!')
      }
      this.setState({ show: false }, this.handleDocas)
    } catch (error) {
       Notiflix.Notify.Failure('Não ticket pode ser iníciao para a doca selecionada!')
    }
  }

  handleSelectDoca = selectDoca => {
    this.setState({ selectDoca, show: true })
  }

  render() {
    const { docas, show } = this.state
    return (
      <DocaContainer 
        show={show}
        docas={docas}
        handleUpdateDoca={this.handleUpdateDoca}
        handleSelectDoca={this.handleSelectDoca}
        handleShowModalBarCode={this.handleShowModalBarCode}
      />
    ) 
  }
}
 
export default Doca