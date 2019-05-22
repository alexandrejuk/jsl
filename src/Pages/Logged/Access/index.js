import React from 'react'
import { Switch, Route } from 'react-router-dom'
import New from './New'
import Ticket from './Ticket'

const Access = () => (
  <Switch>
    <Route path='/logged/access/new' component={New} />
    <Route path='/logged/access/ticket' component={Ticket} />
    <Route path='/logged/access/manager' component={() => <h1>manager page!</h1>} />
  </Switch>
) 
 
export default Access