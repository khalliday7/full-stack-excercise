import { GET_HIGH_SCORES, NEW_HIGH_SCORE } from '../actions/types'

const initialState = {
  items: []
}

const highScoreReducer = (state = initialState, action: Object) => {
  switch(action.type) {
    case GET_HIGH_SCORES:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}

export default highScoreReducer
