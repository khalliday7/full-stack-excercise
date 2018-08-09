import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postHighScore } from '../actions/highScores'

class Controller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      score: 50
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
      score: this.state.score
    }
    this.props.postHighScore(post)
  }


  render() {
    return (
      <div>
        <button type="button" id="game_control">Start Game</button>
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
}

export default connect(null, { postHighScore })(Controller)
