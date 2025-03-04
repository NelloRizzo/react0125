import { useState } from 'react';
import './App.scss';
import { FaSearch } from 'react-icons/fa'; // Import search icon
import Gallery from './gallery-component/Gallery';

function App() {
  const [search, setSearch] = useState<string>('');
  const [target, setTarget] = useState<string>('');

  return (
    <div className='app'>
      <h1>Gallery</h1>
      <div className='search-form'>
        <label htmlFor='search'>Cerca</label>
        <input name='search' id='search' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button disabled={!search.length} onClick={() => setTarget(search)}><FaSearch /></button> {/* Add search icon */}
        <Gallery search={target} />
      </div>
    </div>
  );
}

export default App;
