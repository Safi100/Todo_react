import React from 'react'
import "./form.css"
const Form = ({inputText, setInputText, todo, setTodo}) => {
  const HandleSubmitForm = (e) =>{
    e.preventDefault()
    setTodo([...todo , {completed: false, text:inputText, id:Math.floor(Math.random() * 300) + 1 }])
    setInputText("")
  }
  const HandleInputChange = (e) =>{
    const text = e.target.value.trimStart()
    setInputText(text)
  }
  return (
    <form onSubmit={HandleSubmitForm}>
      <button type='submit' className='btn'>+</button>
      <input onChange={HandleInputChange} value={inputText} className='input' type="text" placeholder='Create new task'/>
    </form>
  )
}

export default Form
