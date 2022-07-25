import React from 'react'
import Todo from "./Todo"

const TodoList = ({todos, setTodo}) => {
  return (
    <div className='to_do_container'>
      {
        (todos.length !== 0 ) ? todos.map((todo) => ( <Todo todos={todos} todo={todo} setTodo={setTodo} key={todo.id}/> )) : <div className="empty_text">There is no task yet...</div>
      }
    </div>
  )
}

export default TodoList
