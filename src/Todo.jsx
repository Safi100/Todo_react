import React from 'react'
import "./todo.css"
const Todo = ({todo}) => {
  return (
    <div className='to_do'>
      <div className="left">
        <div className="complete_container"></div>
        <p className=''>{todo.text}</p>
      </div>
      <div className="remove_btn">X</div>
    </div>
  )
}

export default Todo
