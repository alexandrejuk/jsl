import React, { Component } from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { barcode } from '../../assets'
const { Body } = Modal

class ModalTicketAccessBarCode extends Component {

  state = {
    barCode: ''
  }

  handleChange = e => (
    this.setState({ barCode: e.target.value })
  )

  handleClick = () => {
    this.props.handleUpdateDoca(this.state.barCode)
  }

  render() {
    const { show, handleShowModal } = this.props
    return (
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleShowModal}
      >
        <Body>
          <div  className='modal-ticket-access-bar-code-title'>
            <div className='modal-ticket-access-bar-code'>
              <img className='modal-ticket-access-bar-code-image' src={barcode} alt="scan barcode" />
            </div>
            <h5>Registrar Acesso</h5>
            <h6 className="modalTitle">Utilize o Leitor de código de barras</h6>
            <p className="no-space-around">Para utilizar corretamente o cursor deve ficar piscando</p>
            <Form>
              <Form.Group controlId="formBasicBarCode">
                <Form.Control type="text" value={this.state.barCode} onChange={this.handleChange}/>
              </Form.Group>
            </Form>
            <div>
              <Button className="magitn-button" variant="outline-danger" onClick={handleShowModal}>
                Cancelar
              </Button>
              <Button className="magitn-button" variant="outline-info" onClick={this.handleClick}>
                Registrar
              </Button>
            </div>
          </div>
        </Body>
      </Modal>
    )
  } 
}

export default ModalTicketAccessBarCode
