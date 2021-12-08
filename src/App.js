import './App.css'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, makeStyles } from '@mui/styles'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import theme from './themes/default' // Theming for the entire app

// Theming for elements on this page only
const useStyles = makeStyles(
  theme => ({
    root: {
      width: '100vw',
      height: '100vh',
      maxWidth: '100%', // Prevent unwanted horizontal scroll: https://stackoverflow.com/a/23367686/11903320
      padding: 0,
      margin: 0,
      // background: '#121212',
    },
  }),
  {
    name: 'App',
  }
)

const App = props => {
  const classes = useStyles(props)

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <CssBaseline />
        <Helmet>
          <title>React p5 Demo</title>
        </Helmet>
        <div className={classes.root}>
          <Router>
            <Routes>
              <Route path="//*" element={<Homepage />} />
            </Routes>
          </Router>
        </div>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App
