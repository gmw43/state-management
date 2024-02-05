import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Link to='/home'><li>home</li></Link>
        <Link to='/about'><li>about</li></Link>
        <Link to='/counter'><li>counter</li></Link>


    </div>
  )
}

export default Navbar