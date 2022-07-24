import React, { useState } from 'react'
import "./app.css"
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

  return (
    <div className='container'>
        <div className="current_time">{currentTime}</div>
        <Header TodoNumber={todo} />
         <main>
            <TodoList todos={todo}/>
            <Form inputText={input} setInputText={setInput} todo={todo} setTodo={setTodo}/>
         </main>
    </div>
  )    

}

export default App