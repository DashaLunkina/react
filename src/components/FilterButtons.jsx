import './FilterButtons.css';

function FilterButtons({ setFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')}>all</button>
      <button onClick={() => setFilter('completed')}>completed</button>
      <button onClick={() => setFilter('incomplete')}>incomplete</button>
    </div>
  );
}

export default FilterButtons;
