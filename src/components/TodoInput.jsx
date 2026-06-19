import { useState } from 'react';

export default function TodoInput({ onAddTodo }) {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    onAddTodo(text.trim(), description.trim());
    
    setText(''); 
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-black p-4 rounded-xl border border-red-900/50">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task title..."
        className="w-full px-5 py-4 text-lg bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all duration-200 text-white placeholder-gray-500"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description (optional)..."
        rows="3"
        className="w-full px-5 py-4 text-lg bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all duration-200 text-white placeholder-gray-500 resize-none"
      />
      <button
        type="submit"
        className="w-full sm:w-auto self-end px-10 py-3 text-lg bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg shadow-red-900/20 hover:shadow-red-900/40 hover:scale-105 transition-all duration-200"
      >
        Add Task
      </button>
    </form>
  );
}