import React from 'react'
import { Switch, Route } from 'react-router-dom'
import List from './List'

const Driver = () => (
  <Switch>
    <Route path='/logged/driver/list' component={List} />
  </Switch>
)

export default Driver