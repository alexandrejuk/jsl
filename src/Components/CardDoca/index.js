import React, { Component } from 'react'
import ModalTicketAccessBarCode from '../ModalTicketAccessBarCode'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './index.css'
import { storange, carga, servico  } from '../../assets'

class CardDoca extends Component {
  render() {
    const { 
      doca, 
      ticket = null, 
      show, 
      handleSelectDoca, 
      handleShowModalBarCode,
      handleUpdateDoca
    } = this.props
    return (
      <>
      <ModalTicketAccessBarCode 
        show={show} 
        handleShowModal={handleShowModalBarCode}
        handleUpdateDoca={handleUpdateDoca}
      />
      <Card className='card-doca'>
        <Card.Body>
          {
            ticket ? <>
            <div className='card-doca__header'>
            <div className='card-doca__header-wrapper-image'>
              <img className='card-doca__header--image' src={storange} alt='storange' />
            </div>
            <div>
              <h5 className='card-doca__header--title'>Doca {doca.docaNumber}</h5>
              <p className='card-doca__header--subtitle'>Operação: {ticket.operation.description}</p>
            </div>
            <div>
              <button className='btn-information'>
                <i className="fa fa-info" aria-hidden="true"></i>
              </button>
            </div>
          </div>
            
            <div  className='card-doca__body'>
                <div className='card-doca__body--item operation line-top'>
                  <p className='card-doca__body--subtitle'>
                    Motorista
                  </p>
                  <h6 className='card-doca__body--title operation'>
                    <i className="fa fa-user-o info-icon-color" aria-hidden="true"></i>&nbsp; 
                    {ticket.driver.name}
                  </h6>
                </div>
                <div className='card-doca__body--item operation  line-top'>
                  <p className='card-doca__body--subtitle'>Veículo</p>
                  <h6 className='card-doca__body--title'>
                    <img  width='19px' height='19px' src={carga} alt='trunk' />
                    {ticket.vehicle.model}&nbsp;&nbsp;   
                    {ticket.vehicle.plate}
                  </h6>
                </div>
                <div className=' operation line-top'></div>
                <div className='card-doca__body--item'>
                  tempo 0:989
                </div>

            <div className='card-doca__body--item operation-btn'>

              <Button variant="outline-info" onClick={() => handleSelectDoca(doca.id)}>
                Ler Código de Barras &nbsp;&nbsp; 
                <i className="fa fa-barcode" aria-hidden="true"></i>
              </Button>

            </div>
          </div>
          </>
          :
            <>
            <div className='doca-disponivel'>
              <img className='' width='100px' height='100px' src={servico} alt='storange' />
              <h5 className='card-doca__header--title text-center'>DOCA {doca.docaNumber} DISPONÍVEL</h5>
            </div>
  
            <div className='card-doca__body--item operation-btn'>
              <Button variant="outline-info" onClick={() => handleSelectDoca(doca.id)}>
                Ler Código de Barras &nbsp;&nbsp; 
                <i className="fa fa-barcode" aria-hidden="true"></i>
              </Button>
            </div>
            </>
        }
          </Card.Body>
        </Card>
        </>
      )
    
  }
}
export default CardDoca