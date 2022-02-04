import { useState } from "react"

const Sheep = ({x, y, baa, left, setLeft, endGame}) => {
  const [jumping, setJumping] = useState('static')
  const [xcoord, setXcoord] = useState(x)

  const toHeaven = (sheep) => {
    if (jumping === 'jumping' && jumping === 'paradise') { return }
    const dingSound = sheep.children[2]
    dingSound.paused ? dingSound.play() : dingSound.currentTime = 0
    setJumping('paradise')
    if (left === 0) {
      endGame()
    }
  }

  const makeJump = (sheep) => {
    // if (jumping === 'jumping' || jumping === 'paradise') { return }
    setJumping('jumping')
    const baaSound = sheep.children[1]
    baaSound.paused ? baaSound.play() : baaSound.currentTime = 0
    if (xcoord + 33.2 > 100) {
      setLeft(left -= 1)
    }
    setTimeout(() => {
      setXcoord(xcoord + 33.2)
      setJumping('static')
      if (xcoord + 33.2 > 100) {
        toHeaven(sheep)
      }
    }, 500);
  }

  let picture
  let sheepClass
  if (jumping === 'static') { picture = 'static.png'; sheepClass = '' }
  if (jumping === 'jumping') { picture = 'jumping.png'; sheepClass = 'jumping' }
  if (jumping === 'paradise') { picture = 'jumping.png'; sheepClass = 'toparadise' }

  return(
    <div onClick={(e) => {makeJump(e.currentTarget)}}>
      <img
        src={picture}
        className={`sheep ${sheepClass}`}
        alt='A sheep'
        style={{left:`calc(${xcoord/100} * (70vw - 10vh) - 5vh)`, top:`calc(${y/100} * 90vh - 5vh)`}}
      />
      <audio src={`baaa${baa}.mp3`} id='baa'></audio>
      <audio src='ding2.mp3' id='ding'></audio>
    </div>
  )
}

export default Sheep
