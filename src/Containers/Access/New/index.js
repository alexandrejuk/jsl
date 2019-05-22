import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Banner_1 } from '../../../assets/'
import './index.css'

const New = () => (
  <>
    <img style={{ width: '100%'}} src={Banner_1} alt='banner-1' />
    <Container>
      <Card className='card-position-access'>
        <Card.Body>
          <Card.Title>Serviço</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Form.Group as={Row}>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="Carregar"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Descarregar"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Carregar + Descarregar "
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </Card.Subtitle>
          <Card.Text>
          <Form>
            <Card.Title>Dados Motorista</Card.Title>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control type="text" placeholder="insira o nome completo" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridDocumentId">
                <Form.Label>RG</Form.Label>
                <Form.Control type="text" placeholder="insira o rg" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridDocumentId">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="insira o cpf" />
              </Form.Group>
            </Form.Row>
            <Card.Title>Dados Veículo</Card.Title>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPlaca">
                <Form.Label>Placa</Form.Label>
                <Form.Control placeholder="insira a placa" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridModel">
                <Form.Label>Marca/Modelo</Form.Label>
                <Form.Control placeholder="insira a marca e modelo" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFabric">
                <Form.Label>Fabricante</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Card.Title>Dados Fornecedor</Card.Title>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridDocumentId">
                <Form.Label>CNPJ/CPF</Form.Label>
                <Form.Control placeholder="insira o cnpj/cpf" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSocialName">
                <Form.Label>Razão Social/Nome</Form.Label>
                <Form.Control placeholder="insira a razão social/nome" />
              </Form.Group>
            </Form.Row>
              <Link to='/logged/access/ticket' className='no-sytle-link'>  
                <Button  variant='outline-primary'>
                  Check-in
                </Button>
              </Link>
          </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  </>
)

export default New