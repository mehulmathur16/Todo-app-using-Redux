import React from 'react';
import { Provider } from "react-redux";
import store from './store';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
