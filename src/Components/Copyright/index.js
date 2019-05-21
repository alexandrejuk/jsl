import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const CopyRight = () => (
  <Container className='no-print' fluid={true} style={{ backgroundColor: '#f2f2f2'}}>
    <Container>
      <Row>
        <Col md={8} style={{ margin: '30px 5px'}}>
          <p>© Copyright 2019 <a href='https://www.jsl.com.br'>JSL</a> - All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </Container>
)

export default CopyRight