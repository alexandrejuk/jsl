import React from 'react'
import Button from 'react-bootstrap/Button'
import { Logo, CheckIn } from '../../../assets/'
import './index.css'

const Ticket = ({ handlePrint }) => (
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
        <p className='barcode'>1234567890</p>
        <p className='code-plain-text'>1234567890</p>
      </div>
    </div>
    <div className='card-body--ticket'>
      <div className='card-body-content--ticket'>
        <div className='driver-info'>
          <h5>Dados do Motorista</h5>
          <p className='dest-info'>Alexandre S. Soares</p>
          <p className='dest-info'>R. Bueno Vilela, 51</p>
          <p className='dest-info'>Vila S. Pedro</p>
          <p className='dest-info'>São Bernardo do Campo - SP</p>
        </div>
        <div className='security-code'>
          <h4>1410</h4>
          <p>security code</p>
        </div>
        <div className='barcode-wrapper barcode--validation'>
          <p className='barcode'>123490</p>
          <p className='code-plain-text'>123490</p>
        </div>
      </div>
    </div>
  </div>
  <div className='btn-group--ticket no-print'>
    <div className='btn-ticket no-print'>
      <Button variant="outline-danger" block>Novo Ticket</Button>
    </div>
    <div className='btn-ticket no-print'>
      <Button variant="outline-danger" block>Ir para Gerenciar</Button>
    </div>
    <div className='btn-ticket--print no-print'>
      <Button variant="outline-primary" block onClick={handlePrint}>Imprimir</Button>
    </div>
  </div>
 </div>
)

export default Ticket