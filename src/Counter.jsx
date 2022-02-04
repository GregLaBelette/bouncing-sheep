import { useState, useContext } from 'react'
import GameContext from './GameContext'

const Counter = ({left, endGame}) => {
  const [{startDate, running }] = useContext(GameContext)
  const[time, setTime] = useState(0)

  setTimeout(() => {
    if (time > 20000) { endGame(true) }
    setTime(Date.now() - startDate)
  }, 100)

  return(

    <div className='counter'>
      {
        running ? (
          <div>
            <span>{left} {left === 1 ? 'sheep' : 'sheeps'} left, </span>
            <span>{(20 - time/1000).toFixed(1) } seconds</span>
          </div>
        ) : null
      }
    </div>
  )
}

export default Counter
