import React, { Component } from 'react'
import ModalTicketAccessBarCode from '../ModalTicketAccessBarCode'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './index.css'
import { storange, carga, servico  } from '../../assets'

class CardDoca extends Component {
  state = {
    show: false,
    teste:1
  }

  handleShowModalBarCode = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    const { show } = this.state
    return (
      <>
      <ModalTicketAccessBarCode show={show} handleShowModal={this.handleShowModalBarCode}/>
      <Card className='card-doca'>
        <Card.Body>
          {
            show ?<>
            <div className='card-doca__header'>
            <div className='card-doca__header-wrapper-image'>
              <img className='card-doca__header--image' src={storange} alt='storange' />
            </div>
            <div>
              <h5 className='card-doca__header--title'>Doca 5</h5>
              <p className='card-doca__header--subtitle'>Operação: FORD BRAZIL</p>
            </div>
            <div>
              <button className='btn-information'>
                <i className="fa fa-info" aria-hidden="true"></i>
              </button>
            </div>
          </div>
            
            <div  className='card-doca__body'>
                <div className='card-doca__body--item line-top'>
                  <p className='card-doca__body--subtitle'>
                    Motorista
                  </p>
                  <h6 className='card-doca__body--title operation'>
                    <i className="fa fa-user-o info-icon-color" aria-hidden="true"></i>&nbsp; 
                    Alexandre S. Soares
                  </h6>
                </div>
                <div className='card-doca__body--item operation  line-top'>
                  <p className='card-doca__body--subtitle'>Veículo</p>
                  <h6 className='card-doca__body--title'>
                    <img  width='19px' height='19px' src={carga} alt='trunk' /> FORD PLJ8777
                  </h6>
                </div>
                <div className=' operation line-top'></div>
                <div className='card-doca__body--item'>
                  tempo 0:989
                </div>

            <div className='card-doca__body--item operation-btn'>

              <Button variant="outline-info" onClick={this.handleShowModalBarCode}>
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
              <h5 className='card-doca__header--title text-center'>DOCA {5} DISPONÍVEL</h5>
            </div>
  
            <div className='card-doca__body--item operation-btn'>
              <Button variant="outline-info" onClick={this.handleShowModalBarCode}>
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