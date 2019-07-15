import React from 'react'
import { Switch, Route } from 'react-router-dom'

import New from './New'
import Painel from  '../Access/Doca'
import Manager from  './Manager'

const Doca = () => (
  <Switch>
    <Route path='/logged/doca/new' component={New} />
    <Route path='/logged/doca/painel' component={Painel} />
    <Route path='/logged/doca/manager' component={Manager} />
  </Switch>
) 
 
export default Doca