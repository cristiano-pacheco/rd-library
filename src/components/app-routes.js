import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home'
import NotFound from './not-found'
import Button from './button'

const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/button' component={Button} />
    <Route component={NotFound} />
  </Switch>
)

export default AppRoutes
