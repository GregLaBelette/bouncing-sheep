import Sheep from './Sheep'
import Grass from './Grass'

const Field = () => {
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
    <div className="field">
      <div className="earth">
        <div className="innerEarth">
          {
            sheepCoordinates.map((sheep, i) => <Sheep x={sheep[0]} y={sheep[1]} baa={Math.floor(Math.random() * 4 + 1)} key={i}/>)
          }
        </div>
      </div>
      <div className="paradise">
        <div className="innerParadise">
          {
            grassCoordinates.map((grass, i) => <Grass x={grass[0]} y={grass[1]} key={i}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Field
