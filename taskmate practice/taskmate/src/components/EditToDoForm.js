import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input 
        type='text' 
        value={value}
        className='todo-input' 
        placeholder='Update task' 
        onChange={(e) => setValue(e.target.value)} 
        />
        <button value='submit' className='todo-btn'>update</button>
    </form>
  )
}

export default EditTodoForm;