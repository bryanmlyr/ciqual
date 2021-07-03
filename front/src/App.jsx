import { useState } from 'react';

import { SearchBar } from './components/searchBar';
import { Card } from './components/card';

import './App.css';

function App() {

  const [data, setData] = useState();

  return (
    <div className="w-screen min-h-screen bg-gray-300 py-40 background">
      <div className="flex flex-wrap flex-col content-center ">
        <h1 className="tracking-widest text-4xl font-semibold py-2">CIQUAL</h1>
        <SearchBar searchData={(e) => { setData(e); }} />
      </div>
      <div>
        <div className="px-32 pt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
          {data && data.map((e) =>
            <Card data={e} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
