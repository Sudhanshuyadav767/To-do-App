import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggleComplete, onDeleteTodo, currentFilter, onViewTask }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 font-medium text-lg border-2 border-dashed border-gray-800 rounded-xl">
        No {currentFilter !== 'all' ? currentFilter : ''} tasks found!
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          onViewTask={onViewTask}
        />
      ))}
    </div>
  );
}