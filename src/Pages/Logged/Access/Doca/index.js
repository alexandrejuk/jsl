import React, { Component } from 'react'
import DocaContainer from '../../../../Containers/Access/Doca'
import DocaService from '../../../../services/doca'
import TicketService from '../../../../services/ticket'

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
  }

  handleShowModalBarCode = () => {
    this.setState({ show: !this.state.show })
  }

  handleDocas() {
    this.docaService.docas()
      .then(({ data: docas }) => this.setState({ docas }))
  }
 
  handleUpdateDoca = async (barCode) => {
    const { selectDoca: docaId } = this.state

    await this.ticketService.updateTicket({
      docaId,
      barCode
    })
    this.setState({ show: false }, this.handleDocas)
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