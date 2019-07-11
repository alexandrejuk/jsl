import React from 'react'
import { Switch, Route } from 'react-router-dom'

import New from './New'
import Doca from './Doca'
import Manager from './Manager'
import Ticket from './Ticket'

const Access = () => (
  <Switch>
    <Route path='/logged/access/new' component={New} />
    <Route path='/logged/access/doca' component={Doca} />
    <Route path='/logged/access/manager' component={Manager} />
    <Route path='/logged/access/ticket/:id' component={Ticket} />
  </Switch>
) 
 
export default Access