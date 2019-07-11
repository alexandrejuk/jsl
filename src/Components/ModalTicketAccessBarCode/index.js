import React from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { barcode } from '../../assets'
const { Body } = Modal

const ModalTicketAccessBarCode = ({ show, handleShowModal }) => (
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
            <Form.Control type="text" />
          </Form.Group>
        </Form>
        <div>
          <Button className="magitn-button" variant="outline-danger" onClick={handleShowModal}>
            Cancelar
          </Button>
          <Button className="magitn-button" variant="outline-info">
            Registrar
          </Button>
        </div>
      </div>
    </Body>
  </Modal>
)

export default ModalTicketAccessBarCode
