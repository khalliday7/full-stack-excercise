import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initGame, selectBox, unpause } from '../actions/gamePlay'
import { updateTries, endGame } from '../actions/controller'

class Grid extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  componentWillMount() {
    this.props.initGame()
  }

  onClick(e) {
    var button = e.target
    var index = parseInt(button.name)
    this.props.selectBox(index)
  }

  render () {
    const paused = this.props.pause
    var grid = []
    if (paused) {
      grid = this.props.grid.map((box, i) => {
        var buttonValue = ""
        var boxClass = "covered"

        if (!box.covered) {
          buttonValue = box.value
          boxClass = "uncovered"
        }

        return (
          <div class="box">
            <button class={boxClass} name={i.toString()} onClick={this.onClick} disabled>
              {buttonValue}
            </button>
         </div>
        )
      })
    } else {
      grid = this.props.grid.map((box, i) => {
        var buttonValue = ""
        var boxClass = "covered"
        var disabled = false

        if (!box.covered) {
          buttonValue = box.value
          boxClass = "uncovered"
          disabled = true
        }

        this.props.updateTries(this.props.tries)

        if (this.props.gameOver) {
          this.props.endGame()
        }

        if (disabled) {
          return (
            <div class="box">
              <button class={boxClass} name={i.toString()} onClick={this.onClick} disabled>
                {buttonValue}
              </button>
           </div>
          )
        } else {
          return (
            <div class="box">
              <button class={boxClass} name={i.toString()} onClick={this.onClick}>
                {buttonValue}
              </button>
           </div>
          )
        }
      })
    }

    if (paused) {
      setTimeout(() => this.props.unpause(), 1000)
    }
    return (
      <div class="grid">
        {grid}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    grid: state.gamePlay.grid,
    gameOver: state.gamePlay.gameOver,
    tries: state.gamePlay.numTries,
    pause: state.gamePlay.pause
  }
}

export default connect(mapStateToProps, {
  initGame,
  selectBox,
  endGame,
  updateTries,
  unpause
})(Grid)
