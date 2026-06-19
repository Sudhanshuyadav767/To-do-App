const formatDate = (timestamp) => {
  if (!timestamp) return '';
  return new Date(timestamp).toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true
  });
};

export default function TodoItem({ todo, onToggleComplete, onDeleteTodo, onViewTask }) {

  return (
    <div 
      onClick={() => onViewTask && onViewTask(todo)}
      className="flex flex-col p-4 bg-gray-900 border border-gray-800 rounded-xl group hover:bg-gray-800 hover:border-red-900/50 transition-all duration-200 cursor-pointer shadow-sm"
    >
      <div className="flex items-start justify-between gap-4 w-full">
        <div className="flex flex-col min-w-0 flex-1">
          <span
            className={`text-gray-100 font-bold truncate transition-all duration-200 ${
              todo.completed ? 'line-through text-gray-600 italic' : ''
            }`}
          >
            {todo.text}
          </span>
          {todo.description && (
            <span className={`text-sm truncate mt-1 ${todo.completed ? 'text-gray-700' : 'text-gray-400'}`}>
              {todo.description}
            </span>
          )}
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-500 font-medium">
            <span>Created: {formatDate(todo.createdAt || todo.id)}</span>
            {todo.completed && <span className="text-green-500/80">Done: {formatDate(todo.completedAt)}</span>}
          </div>
        </div>
      
        <div className="flex items-center gap-2 ml-2">
          {!todo.completed && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleComplete(todo.id);
              }}
              className="bg-green-600 text-white hover:bg-green-500 hover:shadow-green-900/30 px-3 py-1.5 rounded-lg text-sm font-bold transition-all shadow-md"
            >
              Done
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteTodo(todo.id);
            }}
            className="bg-red-900/50 hover:bg-red-600 text-red-200 hover:text-white px-3 py-1.5 rounded-lg text-sm font-bold transition-all shadow-md"
            title="Delete Task"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}