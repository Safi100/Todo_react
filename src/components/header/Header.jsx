import React from 'react'
import "./header.css"
const Header = ({TodoNumber}) => {
  return (
    <header>
    <h2>List</h2>
    <span>{TodoNumber.length} task remaining</span>
 </header>
  )
}

export default Header
