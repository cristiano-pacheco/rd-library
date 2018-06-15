import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => (
  <div className='menu-sidebar'>
    <h2 className='title'>Documentação</h2>
    <div className='menu-content'>
      <ul>
        <li>
          <Link to='/item1'>Item 1</Link>
        </li>
        <li>
          <Link to='/item2'>Item 2</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default SideBar
