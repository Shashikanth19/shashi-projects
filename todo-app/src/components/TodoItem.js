import React from 'react';

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
      onClick={() => toggleComplete(todo.id)}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
