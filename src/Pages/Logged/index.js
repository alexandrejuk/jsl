import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Driver from './Driver'

const Logged = () => (
  <Switch>
    <Route path='/logged/driver' component={Driver} />
  </Switch>
) 
 
export default Logged