import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Access from './Access'

const Logged = () => (
  <Switch>
    <Route path='/logged/access' component={Access} />
  </Switch>
) 
 
export default Logged