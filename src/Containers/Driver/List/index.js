import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import TicketModal from '../../../Components/TicketModal'
import TicketGenerate from '../../../Components/TicketGenerate'

const drivers = [
  { id:1, name: 'Alexandre S. Soare', professional: 'Motorista / GM - filiada', status: 'liberado' },
  { id:2, name: 'Thiago Ramalho', professional: 'Motorista / Hyundai - filiada', status: 'aguardando' },
  { id:3, name: 'Victor Silva Lima', professional: 'Motorista / Volvo - filiada', status: 'carregando' },
  { id:4, name: 'Gustavo Lima', professional: 'Motorista / GM - filiada', status: 'descarregando' },
]

 


class DriverList extends Component {

  state = {
    showTicket: false,
    showTicketGenerate: false
  }

  handleHideTicket = () => (
    this.setState({ showTicket: false })
  )

  handleShowModalTicket = () => (
    this.setState({ showTicket: true })
  )

  handleHideTicketGenerate = () => (
    this.setState({ showTicketGenerate: false })
  )

  handleShowModalTicketGenerate = () => (
    this.setState({ showTicketGenerate: true })
  )

  driverRender = driver => (
    <ListGroup.Item action key={driver.id}>
      <h6>{driver.name}</h6>
      <p>{driver.professional}</p>
      <p style={{ margin: '0', color: 'red', fontSize: '.8rem'}}>10:00 - 12:00 - 16:00 - 20:00</p>
    </ListGroup.Item>
  )

  render () {
    const { showTicketGenerate, showTicket } = this.state
    return (
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Card>
            <Card.Header style={{ backgroundColor: '#fff' }}>
              <Row>
                <Col xs={7}>
                  <strong>Motorista 9/20</strong>
                </Col>
                <Col xs={5}>
                  <ButtonToolbar>
                    <Button 
                      style={{ marginRight: '8px' }}
                      variant="outline-secondary" size="sm"
                      onClick={this.handleShowModalTicket}
                    >
                      Etiqueta
                    </Button>
                    <Button 
                      variant="outline-primary"
                      size="sm" 
                      onClick={this.handleShowModalTicketGenerate}
                    >
                      + Motorista
                    </Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {drivers.map(this.driverRender)}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <TicketModal modalShow={showTicket} onHide={this.handleHideTicket} />
        <TicketGenerate modalShow={showTicketGenerate} onHide={this.handleHideTicketGenerate} />
      </Row>
    )
  }
} 
export default DriverList