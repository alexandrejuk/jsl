import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Logged from './Logged'

class Pages extends Component {
  state = {
    isLoading: false,
    isLogged: true,
  }
  render () {
    const {
      isLogged,
    } = this.state

    return (
      <Switch>
        <Route path='/logged' component={Logged}/>
        <Route path='/auth' component={() => 'auth login'}/>
        { 
          isLogged ? 
          <Redirect to='/logged/access/new' /> : 
          <Redirect to='/auth' />
        }
      </Switch>
    ) 
  } 
}
 
export default Pages