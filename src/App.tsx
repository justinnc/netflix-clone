import { useState } from 'react';

import Jumbotron from '@/components/jumbo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header bg-red-50 text-center'>
        <Jumbotron />
      </header>
    </div>
  );
}

export default App;
