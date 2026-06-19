export default function FilterTabs({ currentFilter, onFilterChange }) {
  const tabs = ['all', 'active', 'completed'];

  return (
    <div className="flex border-b border-gray-800 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onFilterChange(tab)}
          className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-all duration-200 ${
            currentFilter === tab
              ? 'border-red-600 text-red-500'
              : 'border-transparent text-gray-500 hover:text-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}