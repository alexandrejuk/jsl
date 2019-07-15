import React from 'react'
import { Switch, Route } from 'react-router-dom'

import New from './New'

const User = () => (
  <Switch>
    <Route path='/logged/user/new' component={New} />
  </Switch>
) 
 
export default User