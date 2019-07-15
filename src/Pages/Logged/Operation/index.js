import React from 'react'
import { Switch, Route } from 'react-router-dom'

import New from './New'

const Operation = () => (
  <Switch>
    <Route path='/logged/operation/new' component={New} />
  </Switch>
) 
 
export default Operation