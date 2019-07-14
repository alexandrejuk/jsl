import React, { Component } from 'react'
import './index.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { check } from '../../assets'
const { Body } = Modal

class ModalTicketAccessBarCode extends Component {

  handleClick = () => {
    const { ticket: { barCode, docaId } } = this.props
    this.props.handleFinalyTicket(barCode, docaId)
    this.props.handleCloseModalFinaly()
  }

  render() {
    const { show, handleCloseModalFinaly, ticket } = this.props
    return (
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseModalFinaly}
      >
        <Body>
          <div  className='modal-ticket-access-bar-code-title'>
            <div className='modal-ticket-access-bar-code'>
              <img className='modal-ticket-access-bar-code-image' src={check} alt="check" />
            </div>
            <h5>Concluir Acesso</h5>
            <p className="no-space-around">Tem certeza que deseja concluir o acesso do Motorista?</p>
            <h6 className="modalTitle">{ticket.driver.name}</h6>
            <div>
              <Button className="magitn-button" variant="outline-danger" onClick={handleCloseModalFinaly}>
                Cancelar
              </Button>
              <Button className="magitn-button" variant="outline-info" onClick={this.handleClick}>
                Confirmar
              </Button>
            </div>
          </div>
        </Body>
      </Modal>
    )
  } 
}

export default ModalTicketAccessBarCode
