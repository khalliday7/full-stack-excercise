import React, { Component } from 'react'
import Grid from './grid'
import Controller from './controller'

class Game extends Component {
  render () {
    return (
      <div>
        <Grid />
        <hr />
        <Controller />
        <hr />
      </div>
    )
  }
}

export default Game
