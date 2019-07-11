import React from 'react'
import './index.css'
import { pack, clock } from '../../assets'
import Modal from 'react-bootstrap/Modal'
import moment from 'moment'

const { Body } = Modal

const ModalTicketAccess = ({ show, ticketSelected, handleCloseModal }) => (
  <Modal
    show={show}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    onHide={handleCloseModal}
  >
    <Body className='modal-ticket-access-card-body'>
      <div className='modal-ticket-access__header'>
        <div className='modal-ticket-access__header--image-wrapper'>
          <img className='modal-ticket-access__header--image' src={pack} alt='caixa' />
        </div>
        <div className='modal-ticket-access__header--text'>
          <p className='modal-ticket-access__header--subtitle'>Acessos na operação</p>
          <h4 className='modal-ticket-access__header--title'>{ticketSelected.operation}</h4>
        </div>
      </div>
      <div className='modal-ticket-access__body'>
        <div className='modal-ticket-access__body--driver-info'>
          <div className='modal-ticket-access__body--driver-info--title'>
            <div className='modal-ticket-access__body--driver-info--circle'></div>
            <h6 className='modal-ticket-access__body--driver-info--text'>
              Informações do Motorista
            </h6>
          </div>
          <div className='modal-ticket-access__body--driver-info--content'>
            <p>Nome <strong>{ticketSelected.driverName}</strong></p>
            <p>Veículo 
              <strong>
                {ticketSelected.vehicleInfo.brand}&nbsp;&nbsp;
                {ticketSelected.vehicleInfo.model}&nbsp;&nbsp;   
                {ticketSelected.vehicleInfo.plate}
              </strong>
            </p>
            <p>Tipo de Serviço <strong>{ticketSelected.operationService}</strong></p>
          </div>
        </div>

        <div className='modal-ticket-access__body--vehicle-info'>
          <div className='modal-ticket-access__body--driver-info--title'>
            <div className='modal-ticket-access__body--driver-info--circle'></div>
            <h6 className='modal-ticket-access__body--driver-info--text'>
              Acessos
            </h6>
          </div>
          <div className='modal-ticket-access__body--access-info--content'>
            <div className='modal-ticket-access__body--access-info--content--item'>
              <div className='modal-ticket-access__body--access-info--content--item-fx'>
                <img className='modal-ticket-access__body--access-info--content-icon' src={clock} alt='img clock' /> 
                <p>Chegada</p>
              </div>
              <strong>{moment(ticketSelected.access.initialDate).format('h:mm:ss')}</strong>
            </div>
            <div className='modal-ticket-access__body--access-info--content--item'>
              <div className='modal-ticket-access__body--access-info--content--item-fx'>
                <img className='modal-ticket-access__body--access-info--content-icon' src={clock} alt='img clock' /> 
                <p>Início Operação</p>
              </div>
              <strong>{moment(ticketSelected.access.initialOperationDate).format('h:mm:ss')}</strong>
            </div>
            <div className='modal-ticket-access__body--access-info--content--item'>
              <div className='modal-ticket-access__body--access-info--content--item-fx'>
                <img className='modal-ticket-access__body--access-info--content-icon' src={clock} alt='img clock' /> 
                <p>Fim Operação</p>
              </div>
              <strong>{moment(ticketSelected.access.finalyOperationDate).format('h:mm:ss')}</strong>
            </div>
            <div className='modal-ticket-access__body--access-info--content--item'>
              <div className='modal-ticket-access__body--access-info--content--item-fx'>
                <img className='modal-ticket-access__body--access-info--content-icon' src={clock} alt='img clock' /> 
                <p>Saída</p>
              </div>
              <strong>{moment(ticketSelected.access.finalyDate).format('h:mm:ss')}</strong>
            </div>

           

          </div>
        </div>

      </div>
    </Body>
  </Modal>
)

export default ModalTicketAccess
