import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import NavBar from '../Components/NavBar'
import CopyRight from '../Components/Copyright'
import Footer from '../Components/Footer'

import Logged from './Logged'

const Pages = () => (
  <Fragment>
    <Container fluid={true} style={{ margion: '0', padding: '0' }}>
      <NavBar />
    </Container>
    <Switch>
      <Route path="/logged" component={Logged}/>
      <Route path="/about" component={() => 'about'}/>
    </Switch>
    <Container fluid={true} style={{ margion: '0', padding: '0' }}>
      <CopyRight />
      <Footer />
    </Container>
  </Fragment>
) 
 
export default Pages