import { UPDATE_TRIES, GAME_OVER, RESET_GAME } from './types'

export const updateTries = (tries) => dispatch => {
  dispatch({
    type: UPDATE_TRIES,
    payload: {
      tries: tries
    }
  })
}

export const endGame = () => dispatch => {
  dispatch({
    type: GAME_OVER,
    payload: {}
  })
}

export const resetGame = () => dispatch => {
  dispatch({
    type: RESET_GAME,
    payload: {}
  })
}
