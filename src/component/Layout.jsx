import React from 'react'
import MySideNav from './MySideNav'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
  <MySideNav/> 
  <div>
    <Outlet/>
    </div>     
    </div>
  )
}

export default Layout
