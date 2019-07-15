import React from 'react'
import { Switch, Route } from 'react-router-dom'

import New from './New'
import Manager from  '../Access/Doca'

const Doca = () => (
  <Switch>
    <Route path='/logged/doca/new' component={New} />
    <Route path='/logged/doca/manager' component={Manager} />
  </Switch>
) 
 
export default Doca