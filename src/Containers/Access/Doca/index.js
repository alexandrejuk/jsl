import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import CardDoca from '../../../Components/CardDoca'
import './index.css'


class Doca extends Component {

  render() {
    return (
      <Container  fluid className='doca-container'>
        <CardDoca />
        <CardDoca />
        <CardDoca />
        <CardDoca />
        <CardDoca />
        <CardDoca />
        <CardDoca />
        <CardDoca />
      </Container>
    )
  } 
} 

export default Doca