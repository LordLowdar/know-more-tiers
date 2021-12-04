import './sass/App.scss';
import { Counter } from './features/counter/counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Index />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
