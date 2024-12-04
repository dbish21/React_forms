import React, { useState } from 'react';
import './styles/Todo.scss';

function Todo({ id, task, completed, removeTodo, toggleComplete, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const [isExiting, setIsExiting] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTask);
    setIsEditing(false);
  };

  const handleRemove = () => {
    setIsExiting(true);
    // Wait for animation to complete before removing
    setTimeout(() => {
      removeTodo(id);
    }, 300);
  };

  let todoContent;
  if (isEditing) {
    todoContent = (
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editTask}
          onChange={e => setEditTask(e.target.value)}
        />
        <button>Save</button>
      </form>
    );
  } else {
    todoContent = (
      <>
        <span
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
          {task}
        </span>
        <button onClick={() => toggleComplete(id)}>
          Mark as {completed ? 'incomplete' : 'complete'}
        </button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={handleRemove}>X</button>
      </>
    );
  }

  return <div className={`Todo ${isExiting ? 'Todo-exit' : ''}`}>{todoContent}</div>;
} 