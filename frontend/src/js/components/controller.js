import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postHighScore } from '../actions/highScores'
import { resetGame } from '../actions/controller'

class Controller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    const post = {
      user_name: this.state.userName,
      score: this.props.score
    }
    this.props.postHighScore(post)
    this.props.resetGame()
  }


  render() {
    if (this.props.gameOver) {
      var submitScoreForm = (
             <div>
                <h3> Score - {this.props.score}</h3>
                <form onSubmit={this.onSubmit}>
                  <div>
                    <br />
                    <label>User Name - </label>
                    <input type="text" name="userName" onChange={this.onChange} value={this.state.userName}/>
                  </div>
                  <br />
                  <button type="submit">Submit</button>
                </form>
            </div>
          )
    }

    return (
      <div>
        <button type="button" id="game_control">Start Game</button>
        <h3>Number of Tries - {this.props.numTries}</h3>
        {submitScoreForm}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameOver: state.controller.gameOver,
    numTries: state.controller.numTries,
    score: state.controller.score
  }
}

export default connect(mapStateToProps, { postHighScore, resetGame })(Controller)
