import React, { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { editTodo, deleteTodo } from '../actions/todoActions';

import '../styles/todo.scss';


function Todo({ todoElement }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todoElement);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const setEditText = () => {
    const newTodoss = todos;

    let n = newTodoss.length;

    for (let i = 0; i < n; i++) {
      if (newTodoss[i] === todoElement) {
        newTodoss[i] = text;
        break;
      }
    }

    setIsEditing(false);
    dispatch(editTodo(newTodoss));
  }

  const handleDelete = () => {
    const newTodoss = todos;
    let n = newTodoss.length;

    for (let i = 0; i < n; i++) {
      if (newTodoss[i] === todoElement) {
        newTodoss.splice(i, 1);
        break;
      }
    }

    dispatch(deleteTodo(newTodoss));
  }

  const markAsComplete = (e) => {
    if (e.target.style.textDecoration === 'line-through') {
      e.target.style.textDecoration = 'none';
    }
    else {
      e.target.style.textDecoration = 'line-through';
    }
  }

  return (
    <div className='todo__container'>
      <div className='todo__header'>
        <div className='todo__title' onClick={markAsComplete}> {todoElement} </div>
        <div className='todo__buttons-container'>
          <button onClick={handleEdit} className='todo__edit-button'>Edit</button>
          <button onClick={handleDelete} className='todo__delete-button'>Delete</button>
        </div>
      </div>

      {(isEditing) ?
        <div className='todo__edit-box'>
          <input value={text} onChange={(e) => setText(e.target.value)} className='todo__edit-input'></input>
          <button onClick={setEditText} className='todo__edit-done-button'>Done</button>
        </div> : null}
    </div>
  )
}

export default Todo;