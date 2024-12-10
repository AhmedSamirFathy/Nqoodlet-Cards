import FilterCards from './components/FilterCards';

const App = () => {
  return (
    <div className="p-8 bg-slate-500 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Cards</h1>
      <FilterCards />
    </div>
  );
};

export default App;
