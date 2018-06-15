import React, { Component } from 'react'

import AppRoutes from './app-routes'
import SideBar from './layout/side-bar'
import Menu from './layout/menu'

class App extends Component {
  render () {
    return (
      <div className='content'>
        <Menu />
        <div className='container'>
          <div className='main-container'>
            <SideBar />
            <AppRoutes />
          </div>
        </div>
      </div>
    )
  }
}

export default App
