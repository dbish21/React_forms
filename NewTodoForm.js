import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task, id: uuid() });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        name="task"
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
} 