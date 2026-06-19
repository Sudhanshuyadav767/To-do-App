export default function TaskModal({ task, onClose }) {
  if (!task) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-900 border border-red-800 rounded-xl p-8 max-w-2xl w-full shadow-2xl shadow-red-900/20 max-h-[90vh] flex flex-col">
        
        <div className="flex justify-between items-start mb-6 border-b border-gray-700 pb-4">
          <h2 className={`text-3xl font-bold ${task.completed ? 'line-through text-gray-500' : 'text-red-500'} break-words pr-4`}>
            {task.text}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
          {task.description || "No description provided."}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <div>Created: {new Date(task.createdAt || task.id).toLocaleString()}</div>
            {task.completed && <div className="text-green-500/80">Completed: {new Date(task.completedAt).toLocaleString()}</div>}
          </div>
          <button 
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}