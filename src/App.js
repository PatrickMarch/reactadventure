import React from 'react';
import Game from './components/Game.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game/>
      </header>
    </div>
  );
}

export default App;


/* import React from 'react';
import Game from './components/game.js'

export default class App extends React.Component {
    render() {
         return (
             <div>
             <Game/>
             </div>
         )
    }
} */