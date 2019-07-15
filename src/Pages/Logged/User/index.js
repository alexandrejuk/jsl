import React from 'react'
import { Switch, Route } from 'react-router-dom'

import New from './New'
import Manager from './Manager'

const User = () => (
  <Switch>
    <Route path='/logged/user/new' component={New} />
    <Route path='/logged/user/manager' component={Manager} />
  </Switch>
) 
 
export default User