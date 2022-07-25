import React, { useEffect, useState } from 'react'
import "./app.css"
import Footer from './components/footer/Footer'
import Header from "./components/header/Header"
import Form from './Form'
import TodoList from './TodoList'
const App = () => {
    const [currentTime , setCurrentTime] = useState(new Date().toLocaleTimeString('en-US'))
    const [input,setInput] = useState("")
    const [todo,setTodo] = useState([])
    setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString('en-US'))  
    }, 1000);
    const saveToLocalStorga = () => {
      localStorage.setItem("todos" , JSON.stringify(todo))
    }
    const getLocalTodos = () => {
      let LocalData = JSON.parse(localStorage.getItem("todos"))
      setTodo(LocalData)
    }
    useEffect(() => {
      getLocalTodos()
    },[])

    useEffect(() => {
      saveToLocalStorga()
    },[todo])
  return (
      <div className='container'>
        <div className="current_time">{currentTime}</div>
        <Header TodoNumber={todo} />
        <main>
          <TodoList setTodo={setTodo} todos={todo}/>
          <Form inputText={input} setInputText={setInput} todo={todo} setTodo={setTodo}/>
         </main>
        <Footer todos={todo} setTodo={setTodo}/>
      </div>
  )
}

export default App