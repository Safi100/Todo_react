import React from 'react'
import "./form.css"
const Form = () => {
  return (
    <form>
      <button type='submit' className='btn'>+</button>
      <input className='input' type="text" placeholder='Create new task'/>
    </form>
  )
}

export default Form
