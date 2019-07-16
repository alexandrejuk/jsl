import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Logged from './Logged'
import Login from './Login'

class Pages extends Component {
  state = {
    isLoading: false,
  }

  componentDidMount () {
    this.shouldRedirect()
  }

  componentDidUpdate() {
    this.shouldRedirect()
  }

  shouldRedirect = () => {
    const { location: { pathname = '' }, history } = this.props
    const token = localStorage.getItem('token')
    if (pathname.indexOf('/auth') !== -1) {
      return 
    }

    if (!token) {
      history.push('/auth')
    }
  }

  render () {
    return (
      <Switch>
        <Route path='/logged' component={Logged}/>
        <Route path='/auth' component={Login}/>
      </Switch>
    ) 
  } 
}
 
export default withRouter(Pages)