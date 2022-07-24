import React from 'react'
import Todo from "./Todo"
const TodoList = ({todos}) => {
  return (
    <div className='to_do_container'>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id}/>
      ))}
    </div>
  )
}

export default TodoList
