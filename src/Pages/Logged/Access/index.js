import React from 'react'
import { Switch, Route } from 'react-router-dom'

import New from './New'
import Manager from './Manager'
import Ticket from './Ticket'

const Access = () => (
  <Switch>
    <Route path='/logged/access/new' component={New} />
    <Route path='/logged/access/manager' component={Manager} />
    <Route path='/logged/access/ticket' component={Ticket} />
  </Switch>
) 
 
export default Access