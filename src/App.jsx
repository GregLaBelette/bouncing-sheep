import { useState } from 'react';
import GameContext from './GameContext';
import './App.css';

import Field from './Field';

const App = () => {
  const game = useState({
    startDate: Date.now(),
    score: 0,
    running: true
  })
  const sheepCoordinates = []
  const grassCoordinates = []

  const getRandomSheep = () => {
    const x = Math.floor(Math.random()* 100)
    const y = Math.floor(Math.random()* 100)
    const tooClose = sheepCoordinates.find((elt) =>
      Math.abs(elt[0] - x) < 10 && Math.abs(elt[1] < 15)
    )
    if (tooClose) {
      return(getRandomSheep())
    }
    sheepCoordinates.push([x, y])
  }

  const getRandomGrass = () => {
    const x = Math.floor(Math.random()* 100)
    const y = Math.floor(Math.random()* 100)
    const tooClose = grassCoordinates.find((elt) =>
      Math.abs(elt[0] - x) < 10 && Math.abs(elt[1] < 15)
    )
    if (tooClose) {
      return(getRandomGrass())
    }
    grassCoordinates.push([x, y])
  }

  for (let i=0; i<10; i++) {
    getRandomSheep();
    getRandomGrass();
  }

  return (
    <GameContext.Provider value={game}>
      <Field sheepCoordinates={sheepCoordinates} grassCoordinates={grassCoordinates} />
    </GameContext.Provider>
  );
}

export default App;
