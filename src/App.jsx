import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <News/>
    </div>
  );
}

export default App
