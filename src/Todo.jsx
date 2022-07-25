import React from 'react'
import "./todo.css"
const Todo = ({todos, todo, setTodo}) => {

  const HandleCompleted = () => {
    setTodo(todos.map((Todo) => {
      const result = (Todo.id === todo.id) ? {...Todo,completed: !Todo.completed} : Todo
      return result
    }))
  }
  const HandleDeleteTodo = () => {
    setTodo(todos.filter((Todo) => Todo.id !== todo.id)) // Update to do without deleted one
  }
  return (
    <div className='to_do'> 
      <div className="left">
        <div className={`complete_container ${todo.completed ? "completed_circle" :''}`} onClick={HandleCompleted}></div>
        <p className={`text ${todo.completed ? "completed_text" :'' }`} onClick={HandleCompleted}>{todo.text}</p>
      </div>
      <div className="remove_btn" onClick={HandleDeleteTodo}>X</div>
    </div>
  )
}

export default Todo
