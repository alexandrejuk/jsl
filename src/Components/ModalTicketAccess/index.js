import React from 'react'
import './index.css'
import { pack, clock } from '../../assets'
import Modal from 'react-bootstrap/Modal'
import moment from 'moment'

const { Body } = Modal

const statusOperationType = {
  waiting_service: 'Entrada',
  start_service: 'Início Operação',
  ended_service: 'Fim Operação',
  completed: 'Saída',
  cancel: 'Cancelado'
}

const statusServiceType = {
  loading: 'Carregar',
  unload: 'Descarregar',
  loading_unload: 'Carregar + Descarregar',
}

const ticketEvent = event => (
  <div className='modal-ticket-access__body--access-info--content--item' key={event.id}>
    <div className='modal-ticket-access__body--access-info--content--item-fx'>
      <img className='modal-ticket-access__body--access-info--content-icon' src={clock} alt='img clock' /> 
      <p>{statusOperationType[event.status]}</p>
    </div>
    <strong>{moment(event.startedAt).format('HH:mm:ss')}</strong>
  </div>
)

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
          <h4 className='modal-ticket-access__header--title'>{ticketSelected.operation.description}</h4>
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
            <p>Nome <strong>{ticketSelected.driver.name}</strong></p>
            <p>Veículo 
              <strong>
                {ticketSelected.vehicle.brand}&nbsp;&nbsp;
                {ticketSelected.vehicle.model}&nbsp;&nbsp;   
                {ticketSelected.vehicle.plate}
              </strong>
            </p>
            <p>Tipo de Serviço <strong>{statusServiceType[ticketSelected.service]}</strong></p>
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
            {ticketSelected.ticketEvents.map(ticketEvent)}            
          </div>
        </div>

      </div>
    </Body>
  </Modal>
)

export default ModalTicketAccess
