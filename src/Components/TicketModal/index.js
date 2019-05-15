import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

const TicketModal = ({ modalShow, onHide }) => (
  <Modal
    show={modalShow}
    onHide={onHide}
    size='lg'
    aria-labelledby='contained-modal-title-vcenter'
    centered
  >
    <Modal.Body>
      <Row>
        <Col xs={10}>
          <h4>JSL S.A</h4>
          <p>52.548.435/0001-79</p>
        </Col>
        <Col xs={2}>
          <h2>9876</h2>
          <p>security code</p>
        </Col>
        <Col xs={12}>
          <p style={{margin: '  0' }}>
            <strong>ALEXANDRE S SOARES</strong>
          </p>
          <p style={{margin: '  0' }}>RG: 098765432</p>
          <p>VEICULO: VOLVO SM 360 / PLACA: HGB-1234</p>
          <h6>SERVICO</h6>
          <p>Carregar Material + NF</p> 
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
)

export default TicketModal