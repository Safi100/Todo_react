import React from 'react'
import "./footer.css"
const Footer = ({todos, setTodo}) => {
  const HandleDeleteCompleted = () => {
    setTodo(todos.filter((Todo) => Todo.completed !== true))
  }
  const HandleDeleteList = () => {
    setTodo([])
  }  
  return (
    <footer className="delete_container">
        <span onClick={HandleDeleteCompleted}>Clear completed task</span>
        <span onClick={HandleDeleteList}>Delete list</span>
    </footer>
  )
}

export default Footer
