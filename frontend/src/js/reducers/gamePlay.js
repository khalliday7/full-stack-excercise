import { SELECT_BOX } from '../actions/types'

// allowable shapes

function generateRandomGrid() {

}

const initialState = {
  grid: generateRandomGrid(),
  onFirstChoice: true,
}

const gamePlayReducer = (state = initialState, action: Object) => {
  switch(action.type) {
    default:
      return state
  }
}

export default gamePlayReducer
