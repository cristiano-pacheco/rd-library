import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home'
import NotFound from './not-found'
import Button from './button'

import Item1 from './elements/item1'
import Item2 from './elements/item2'


const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/button' component={Button} />
    <Route exact path='/item1' component={Item1} />
    <Route exact path='/item2' component={Item2} />
    <Route component={NotFound} />
  </Switch>
)

export default AppRoutes
