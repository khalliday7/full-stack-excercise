import { GAME_OVER, UPDATE_TRIES, RESET_GAME } from '../actions/types'

const initialState = {
  gameOver: false,
  numTries: 0,
  score: 0
}

const controllerReducer = (state = initialState, action: Object) => {
  switch(action.type) {
    case GAME_OVER:
      console.log('game over')
      return {
        gameOver: true,
        numTries: state.numTries,
        score: state.numTries
      }
    case UPDATE_TRIES:
      return {
        ...state,
        numTries: action.payload.tries
      }
    case RESET_GAME:
      return initialState
    default:
      return state
  }
}

export default controllerReducer

