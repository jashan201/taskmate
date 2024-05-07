import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import {v4 as uuidv4} from 'uuid';
import EditTodoForm from './EditToDoForm';
uuidv4();

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, compleated: false, isEditing: false}])
        console.log(todos);
    }

    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, compleated: !todo.compleated} :todo))
    }

    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} :todo))
    }

    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? {...
        todo, task, isEditing: !todo.isEditing} :todo))
    }

  return (
    <div className='todoWrapper'>
        <h1>Task Traker</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <Todo task={todo} key={index}
            toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        ))}
    </div>
  )
}

export default ToDoWrapper;