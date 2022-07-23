import React, { useEffect, useState } from 'react'
import "./app.css"
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
        
         <main>
            <TodoList/>
            <Form/>
         </main>
    </div>
  )    

}

export default App