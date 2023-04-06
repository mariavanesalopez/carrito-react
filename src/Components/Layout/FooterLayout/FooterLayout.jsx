import React from 'react'
import { Outlet } from 'react-router-dom'

const FooterLayout = () => {
  return (
    <div>
    <Outlet/>
    <h2>Footer</h2>
    </div>
  )
}

export default FooterLayout