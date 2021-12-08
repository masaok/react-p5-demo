import logo from './logo.svg'
import './App.css'

import { makeStyles, ThemeProvider } from '@mui/styles'

import theme from './themes/default'

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
