import { INIT_GAME, SELECT_BOX, UNPAUSE } from './types'

export const selectBox = (index) => dispatch => {
  dispatch({
    type: SELECT_BOX,
    payload: {
      index: index
    }
  })
}

export const unpause = () => dispatch => {
  dispatch({
    type: UNPAUSE,
    payload: {}
  })
}

export const initGame = () => dispatch => {
  dispatch({
    type: INIT_GAME,
    payload: {}
  })
}
