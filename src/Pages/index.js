import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Logged from './Logged'
import Login from './Login'

class Pages extends Component {
  state = {
    isLoading: false,
    isLogged: true,
  }

  componentDidMount () {
    this.shouldRedirect()
  }

  componentDidUpdate() {
    this.shouldRedirect()
  }

  shouldRedirect = () => {
    const { location: { pathname = '' }, history } = this.props

    if (pathname.indexOf('/auth') !== -1) {
      return 
    }

    if (!this.state.isLogged) {
      history.push('/auth')
    }
  }

  render () {
    const {
      isLogged,
    } = this.state

    return (
      <Switch>
        <Route path='/logged' component={Logged}/>
        <Route path='/auth' component={Login}/>
        { 
          false ? 
          <Redirect to='/logged/access/new' /> : 
          <Redirect to='/auth' />
        }
      </Switch>
    ) 
  } 
}
 
export default withRouter(Pages)