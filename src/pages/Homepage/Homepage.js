import Sketch from 'react-p5'

import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3),
    },
  }),
  {
    name: 'Homepage',
  }
)

let x = 50
let y = 50

const Homepage = props => {
  const classes = useStyles(props)

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500).parent(canvasParentRef)
  }

  const draw = p5 => {
    p5.background(0)
    p5.ellipse(x, y, 70, 70)
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++
  }

  return (
    <div className={classes.root}>
      <div className={classes.name}>
        <Typography variant="h2">Masao Kitamura</Typography>
      </div>
      <Sketch setup={setup} draw={draw} />;
    </div>
  )
}

export default Homepage
