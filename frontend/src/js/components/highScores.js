import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHighScores } from '../actions/highScores'

class HighScores extends Component {
  componentWillMount() {
    this.props.getHighScores()
  }

  render () {
    const highScores = this.props.highScores.map(highScore => {
      var rank = highScore[0]
      var entry = highScore[1]
      var text = rank + ". USER = " + entry.user_name + " | SCORE = " + entry.score
      return (
        <div key={entry.id}>
          <p> { text } </p>
        </div>
      )
    })
    return (
      <div>
        <h1>High Scores</h1>
        {highScores}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  highScores: state.highScores.items
})

export default connect(mapStateToProps, { getHighScores })(HighScores)
