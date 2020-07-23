import React, { FC } from 'react';
import { withStyles, StyleRules } from '@material-ui/core/styles'

const styles = (): StyleRules => ({
  container: {
    textAlign: 'center'
  }
})

const Home: FC = () => {
  return (
    <h1>Hello, world!</h1>
  )
}

export default withStyles(styles)(Home)