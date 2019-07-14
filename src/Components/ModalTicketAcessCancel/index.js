import React, { Component } from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { close } from '../../assets'
const { Body } = Modal

class ModalTicketAccessBarCode extends Component {

  state = {
    driverName: ''
  }

  handleChange = e => (
    this.setState({ driverName: e.target.value })
  )

  handleClick = () => {
    const { driverName } = this.state
    const { ticket: { driver, barCode } } = this.props
    if(driverName.toLowerCase() === driver.name.toLowerCase()) {
      this.props.handleCancelTicket(barCode)
      this.props.handleCloseModalCancel()
    }
  }

  render() {
    const { show, handleCloseModalCancel, ticket } = this.props
    return (
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseModalCancel}
      >
        <Body>
          <div  className='modal-ticket-access-bar-code-title'>
            <div className='modal-ticket-access-bar-code'>
              <img className='modal-ticket-access-bar-code-image' src={close} alt="close" />
            </div>
            <h5>Cancelar Ticket de Acesso</h5>
            <p className="no-space-around">Para cancelar Reescrevar o nome do Motorista!</p>
            <h6 className="modalTitle">{ticket.driver.name}</h6>
            <Form>
              <Form.Group controlId="formBasicDriverName">
                <Form.Control type="text" value={this.state.driverName} onChange={this.handleChange}/>
              </Form.Group>
            </Form>
            <div>
              <Button className="magitn-button" variant="outline-danger" onClick={handleCloseModalCancel}>
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
