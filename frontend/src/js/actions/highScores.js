import { GET_HIGH_SCORES } from './types'

export const getHighScores = () => dispatch => {
  fetch('http://localhost:5000/getHighScores')
    .then(res => res.json())
    .then(highScores =>
      dispatch({
        type: GET_HIGH_SCORES,
        payload: highScores
      })
    )
}

export const postHighScore = (post) => dispatch => {
  fetch('http://localhost:5000/postHighScore', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(highScores =>
      dispatch({
        type: GET_HIGH_SCORES,
        payload: highScores
      })
    )
}

