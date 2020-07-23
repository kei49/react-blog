import React, { FC } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import red from '@material-ui/core/colors/red'

import Home from './Home';
import './App.css'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </BrowserRouter>
  )
}

export default App