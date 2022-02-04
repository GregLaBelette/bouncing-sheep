import { useState, useContext } from 'react'

import Counter from './Counter'
import Sheep from './Sheep'
import Grass from './Grass'
import GameContext from './GameContext'
import Modal from './Modal'

const Field = ({ sheepCoordinates, grassCoordinates }) => {
  // console.log('field Rendered')
  const [game, setGame] = useContext(GameContext)
  const[left, setLeft] = useState(10)

  const endGame = (lost = false ) => {
    const score = ((Date.now() - game.startDate)/1000).toFixed(1)
    lost ? setGame({score: 0, runnning: false }) : setGame({ score: score, running: false })
  }

  return (
    <div className="field">
      <div className="earth">
        <div className="innerEarth">
          {
            game.running ? (
              sheepCoordinates.map((sheep, i) => <Sheep x={sheep[0]} y={sheep[1]} baa={Math.floor(Math.random() * 4 + 1)} left={left} setLeft={setLeft} endGame={endGame} key={i}/>)
            ) : null
          }
        </div>
      </div>
      <div className="paradise">
        <div className="innerParadise">
          {
            game.running ? (
              grassCoordinates.map((grass, i) => <Grass x={grass[0]} y={grass[1]} key={i}/>)
            ) : null
          }
        </div>
      </div>
      <Counter left={left} endGame={endGame}/>
      <div className="gamerules">Click on the sheeps to take them to the green pastures, on time !</div>
      <div className="title">Welcome to BouncingSheep</div>

      {
        !game.running ? (
          <Modal>
            {
              game.score === 0 ? (
                <h2>Too late ! </h2>
              ) : (
                <h2>Mission accomplished in {game.score} seconds ! </h2>
              )
            }
            <a href="/" className='button'>Try again</a>
          </Modal>
        ) : null
      }
    </div>
  )
}

export default Field
