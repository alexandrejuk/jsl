import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { Logo, CheckIn } from '../../../assets/'
import './index.css'

const Ticket = ({ handlePrint, ticketData }) => (
 <div>
    <div className='ticket-access-info no-print'>
      <div className='ticket-access-info--logo'>
        <img className='ticket-access-info--logo__image' src={CheckIn} alt='check-in' />
      </div>
      <h4>Ticket de Acesso Liberado!</h4>
      <p></p>
    </div>
    <div className='card-ticket'>
    <div className='card-header-ticket' style={{ backgroundColor: '#fff' }}>
      <div className='logo-wrapper'>
        <img className='logo' src={Logo} alt='logo' />
      </div>
      <div className='qrcode'>
        <img className='qrcodeImage' src='https://pngimg.com/uploads/qr_code/qr_code_PNG38.png' alt='qrcode' />
      </div>
      <div className='barcode-wrapper'>
        <p className='barcode'>{ticketData.ticketId}</p>
        <p className='code-plain-text'>{ticketData.ticketId}</p>
      </div>
    </div>
    <div className='card-body--ticket'>
      <div className='card-body-content--ticket'>
        <div className='driver-info'>
          <h5>Dados do Motorista</h5>
          <p className='dest-info'>{ticketData.driverName}</p>
          <p className='dest-info'>{ticketData.operationService}</p>
          <h5>Dados do Veículo</h5>
          <p className='dest-info'>{ticketData.vehicleInfo.model}</p>
          <p className='dest-info'>{ticketData.vehicleInfo.plate}</p>
          <p className='dest-info'>{ticketData.createdTicketDate}</p>
        </div>
        <div className='security-code'>
          <h4>{ticketData.securityCode}</h4>
          <p>security code</p>
        </div>
        <div className='barcode-wrapper barcode--validation'>
          <p className='barcode'>{ticketData.securityCode}</p>
          <p className='code-plain-text'>{ticketData.securityCode}</p>
        </div>
      </div>
    </div>
  </div>
  <div className='btn-group--ticket no-print'>
    <div className='btn-ticket no-print'>
      <Link to='/logged/access/new'>  
        <Button variant="outline-danger" block>
          Novo Ticket
        </Button>
      </Link>
    </div>
    <div className='btn-ticket no-print'>
      <Link to='/logged/access/manager'>  
        <Button variant="outline-danger" block>
          Gerenciar
        </Button>
      </Link>
    </div>
    <div className='btn-ticket--print no-print'>
      <Button variant="outline-primary" block onClick={handlePrint}>
        Imprimir
      </Button>
    </div>
  </div>
 </div>
)

export default Ticket