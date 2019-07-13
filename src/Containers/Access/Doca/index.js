import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import CardDoca from '../../../Components/CardDoca'
import './index.css'


class Doca extends Component {

  renderDoca = doca => (
    <CardDoca
      key={doca.id}
      doca={doca} 
      show={this.props.show}
      handleUpdateDoca={this.props.handleUpdateDoca}
      handleSelectDoca={this.props.handleSelectDoca}
      handleShowModalBarCode={this.props.handleShowModalBarCode}
    />
  )
  render() {
    const { docas } = this.props
    return (
      <Container  fluid className='doca-container'>
        {docas.map(this.renderDoca)}
      </Container>
    )
  } 
} 

export default Doca