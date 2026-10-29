import { useRef, useState } from 'react';

function SearchBox() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [search, setSearch] = useState('');

  renderCount.current += 1;

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Search Box</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={focusInput}>
        Focus Input
      </button>

      <p>You typed: {search}</p>

      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default SearchBox;