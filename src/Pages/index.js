import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import NavBar from '../Components/NavBar'

import Logged from './Logged'

const Pages = () => (
  <div>
    <NavBar />
    <Container style={{ marginTop: '14px' }} fluid={true}>
      <Switch>
        <Route path="/logged" component={Logged}/>
        <Route path="/about" component={() => 'about'}/>
      </Switch>
    </Container>
  </div>
) 
 
export default Pages