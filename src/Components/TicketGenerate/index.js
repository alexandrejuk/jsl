import React from 'react'
import Modal from 'react-bootstrap/Modal'

const TicketGenerate = ({ modalShow, onHide }) => (
  <Modal
    show={modalShow}
    onHide={onHide}
    size='lg'
    aria-labelledby='contained-modal-title-vcenter'
    centered
  >
    <Modal.Body>
      cadastrar novo motorista
    </Modal.Body>
  </Modal>
)

export default TicketGenerate