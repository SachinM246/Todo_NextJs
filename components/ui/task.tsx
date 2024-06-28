import React, { useState } from 'react';
import { TodoItemProps } from './types';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`flex items-center ml-2 bg-violet-300	 rounded-lg p-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mr-2"
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
          className="border p-1 mr-2 flex-grow"
        />
      ) : (
        <span className="flex-grow">{todo.text}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)} className="bg-yellow-500 text-white py-1 px-2 mr-2 rounded">
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white py-1 px-2 rounded">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
