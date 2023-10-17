import React,{useState} from 'react'

export const todoForm = () => {
    const [value, setValue] = useState("")
  return (
    <form className='TodoForm'>
        <input type="text" className='todo-Input' placeholder='What is the task for Today?'
         onChanges= {(e) => console.log(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add 
        Task</button>

    </form>
      
  )
}
