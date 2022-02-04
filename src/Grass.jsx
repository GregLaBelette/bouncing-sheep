const Grass = ({x, y}) => {
  return(
    <img
      src="grass.png"
      className="grass"
      alt='Some grass'
      style={{left:`calc(${x/100} * (30vw - 6vh) - 3vh)`, top:`calc(${y/100} * 94vh - 3vh)`}}
    />
  )
}

export default Grass
