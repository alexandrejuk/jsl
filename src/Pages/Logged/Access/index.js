import React from 'react'
import { Switch, Route } from 'react-router-dom'
import New from './New'

const Access = () => (
  <Switch>
    <Route path='/logged/access/new' component={New} />
  </Switch>
) 
 
export default Access