import { useState } from 'react';

import useLocalStorage from './hooks/useLocalStorage';

import TodoInput from './components/TodoInput';
import FilterTabs from './components/FilterTab';
import TodoList from './components/TodoList';
import TaskModal from './components/TaskModal';

import './App.css';

export default function App() {
  const [todos, setTodos] = useLocalStorage('todos-app', []);
  const [filter, setFilter] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTodo = (text, description = "") => {
    const newTodo = {
      id: Date.now(),
      text,
      description,
      completed: false,
      createdAt: Date.now(),
      completedAt: null,
    };
    setTodos([newTodo, ...todos]);
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed, completedAt: !todo.completed ? Date.now() : null } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; 
  });

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white antialiased font-sans">
      <div className="w-full md:w-1/2 bg-black md:border-r border-red-800 p-6 sm:p-10 flex flex-col md:h-screen pt-12 md:pt-10">
        <div className="max-w-lg mx-auto w-full">
          <h2 className="text-xl md:text-4xl font-extrabold text-red-500 mb-8 border-b border-red-800 pb-4">
            Create Your <span className="text-white">To-DO List</span>
          </h2>
          <TodoInput onAddTodo={handleAddTodo} />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 sm:p-10 md:overflow-y-auto bg-gray-900 relative md:h-screen border-t md:border-t-0 border-red-800">
        <div className="max-w-3xl mx-auto">
          <header className="mt-8 md:mt-0 mb-8 border-b border-red-900/50 pb-4">
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
            <span className="text-red-500">Your</span> Tasks
            </h1>
            <p className="text-gray-400">
              {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
            </p>
          </header>

          <FilterTabs currentFilter={filter} onFilterChange={setFilter} />
          
          <TodoList
            todos={filteredTodos}
            currentFilter={filter}
            onToggleComplete={handleToggleComplete}
            onDeleteTodo={handleDeleteTodo}
            onViewTask={setSelectedTask}
          />
        </div>

        <TaskModal 
          task={selectedTask} 
          onClose={() => setSelectedTask(null)} 
        />
      </div>
    </div>
  );
}