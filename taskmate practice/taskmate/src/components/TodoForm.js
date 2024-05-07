import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input 
        type='text' 
        value={value}
        className='todo-input' 
        placeholder='what is the task today?' 
        onChange={(e) => setValue(e.target.value)} 
        />
        <button value='submit' className='todo-btn'>Add task</button>
    </form>
  )
}

export default TodoForm;