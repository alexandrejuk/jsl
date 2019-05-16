import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Footer = () => (
  <Container fluid={true} style={{ backgroundColor: '#191919'}}>
    <Container>
      <Row>
        <Col md={12} style={{ margin: '20px 0 10px 0'}}>
          <span style={{ color: '#8D8D8D', fontSize: '.9em', cursor: 'pointer' }}>
            Brasil | Política de Privacidade | Termos de Uso
          </span>
        </Col>
      </Row>
    </Container>
  </Container>
)

export default Footer