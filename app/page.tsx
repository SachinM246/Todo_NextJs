"use client"
import React, { useState } from 'react';
import TodoList from '../components/ui/tasks';
import { Todo } from '../components/ui/types';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'First Task is to make website using Next Js ans ShadCN', completed: false },
    { id: 2, text: 'Second task is to learn redux', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4 max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="border p-2 mr-2 flex-grow"
            placeholder="Add a new to-do"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </div>
  );
};

export default Home;
