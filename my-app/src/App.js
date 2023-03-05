import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './actions';
import './App.css';
import './dark-mode.css';

function App() {
  const isDarkMode = useSelector(state => state.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div>
      <header>
        <h1>Hello Guys</h1>
        <button onClick={handleToggleDarkMode}>Dark Mode</button>
      </header>
      <main>
        <p>Template dark mode & Light mode site with React/Redux</p>
      </main>
      <style>{isDarkMode ? 'body { background-color: #000000; color: #ffffff; }' : 'body { background-color: #ffffff; color: #000000; }'}</style>
    </div>
  );
}

export default App;
