import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <section className='todoSection'>
     <div className='todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
        <div className='icons'>
        <FontAwesomeIcon icon={faPenSquare} className='edit' onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} className='delete' onClick={() => deleteTodo(task.id)} />
        </div>
     </div>
    </section>
  )
}

export default Todo;