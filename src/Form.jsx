import React from 'react'
import "./form.css"
import { v4 as uuid } from 'uuid';
const Form = ({inputText, setInputText, todo, setTodo}) => {
  const HandleSubmitForm = (e) =>{
    e.preventDefault()
    setTodo([...todo , {completed: false, text:inputText, id:uuid()}])
    setInputText("")
  }
  const HandleInputChange = (e) =>{
    const text = e.target.value.trimStart()
    setInputText(text)
  }
  return (
    <form onSubmit={HandleSubmitForm}>
      <button type='submit' className='btn'>+</button>
      <input onChange={HandleInputChange} value={inputText} className='input' type="text" placeholder='Create new task' required/>
    </form>
  )
}

export default Form
