import React from 'react'
import { Switch, Route } from 'react-router-dom'

import New from './New'
import Manager from './Manager'

const Operation = () => (
  <Switch>
    <Route path='/logged/operation/new' component={New} />
    <Route path='/logged/operation/manager' component={Manager} />
  </Switch>
) 
 
export default Operation