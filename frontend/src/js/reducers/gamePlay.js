import { INIT_GAME, SELECT_BOX, RESET_GAME, UNPAUSE } from '../actions/types'
import { incrementTries } from '../actions/controller'

function generateRandomGrid() {
  return shuffle([
    {value: 'A', covered: true},
    {value: 'B', covered: true},
    {value: 'C', covered: true},
    {value: 'D', covered: true},
    {value: 'E', covered: true},
    {value: 'F', covered: true},
    {value: 'G', covered: true},
    {value: 'H', covered: true},
    {value: 'A', covered: true},
    {value: 'B', covered: true},
    {value: 'C', covered: true},
    {value: 'D', covered: true},
    {value: 'E', covered: true},
    {value: 'F', covered: true},
    {value: 'G', covered: true},
    {value: 'H', covered: true},
  ])
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const newInitialState = () => {
  return {
    grid: generateRandomGrid(),
    onFirstChoice: true,
    firstChoiceIndex: null,
    numPairs: 0,
    numTries: 0,
    gameOver: false,
    pause: false,
    afterPauseState: {}
  }
}

const gamePlayReducer = (state = newInitialState(), action: Object) => {
  switch(action.type) {
    case SELECT_BOX:
      var selection = action.payload
      var i = selection.index
      var boxSelected = state.grid[i]
      var v = boxSelected.value
      var numPairs = state.numPairs
      var numTries = state.numTries
      var gameOver = false

      if (state.onFirstChoice) {
        return {
          grid: [...state.grid.slice(0,i),
                {value: v, covered: false},
                 ...state.grid.slice(i+1)],
          onFirstChoice: false,
          firstChoiceIndex: i,
          numPairs: numPairs,
          numTries: numTries,
          gameOver: gameOver,
          pause: false,
          afterPauseState: {}
        }
      } else {
        var fi = state.firstChoiceIndex
        var firstChoice = state.grid[fi]
        var pv = firstChoice.value

        if (v == pv) {
          numPairs += 1
          gameOver = numPairs == state.grid.length / 2
          return {
            grid: [...state.grid.slice(0,i),
                  {value: v, covered: false},
                   ...state.grid.slice(i+1)],
            onFirstChoice: true,
            firstChoice: null,
            numPairs: numPairs,
            numTries: numTries + 1,
            gameOver: gameOver,
            pause: false,
            afterPauseState: {}
          }
        } else {
          var revealiGrid   = [...state.grid.slice(0,i),
                              {value: v, covered: false},
                              ...state.grid.slice(i+1)]
          var coveriGrid    = [...state.grid.slice(0,i),
                              {value: v, covered: true},
                              ...state.grid.slice(i+1)]
          var revealfiGrid  = [...revealiGrid.slice(0,fi),
                              {value: pv, covered: false},
                              ...revealiGrid.slice(fi+1)]
          var coverfiGrid   = [...coveriGrid.slice(0,fi),
                              {value: pv, covered: true},
                              ...coveriGrid.slice(fi+1)]
          var afterPauseState = {
            grid: coverfiGrid,
            onFirstChoice: true,
            firstChoice: null,
            numPairs: numPairs,
            numTries: numTries + 1,
            gameOver: gameOver,
            pause: false,
            afterPauseState: {}
          }

          return {
            ...state,
            grid: revealfiGrid,
            pause: true,
            afterPauseState: afterPauseState
          }
        }
      }
      return state

    case UNPAUSE:
      return state.afterPauseState

    case INIT_GAME:
      return newInitialState()

    case RESET_GAME:
      return newInitialState()

    default:
      return state
  }
}

export default gamePlayReducer
