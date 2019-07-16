import React, { Fragment, Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import request from '../../services/request'

import NavBar from '../../Components/NavBar'
import CopyRight from '../../Components/Copyright'
import Footer from '../../Components/Footer'

import Access from './Access'
import User from './User'
import Operation from './Operation'
import Doca from './Doca'

class Logged extends Component {
  constructor(props){
    super(props)

    request.forceRenewAxiosInstance()
  }

  render () {
    return (
      <Fragment>
        <Container fluid={true} style={{ margion: '0', padding: '0' }}>
          <NavBar />
        </Container>
          <Switch>
            <Route path='/logged/access' component={Access} />
            <Route path='/logged/user' component={User} />
            <Route path='/logged/operation' component={Operation} />
            <Route path='/logged/doca' component={Doca} />
          </Switch>
        <Container fluid={true} style={{ margion: '0', padding: '0' }}>
        <CopyRight />
        <Footer />
        </Container>
      </Fragment>
    ) 
  } 
}

 
export default Logged