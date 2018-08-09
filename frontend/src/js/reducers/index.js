import { combineReducers } from 'redux'
import highScoreReducer from './highScores'
import gamePlayReducer from './gamePlay'

export default combineReducers({
  highScores: highScoreReducer,
  gamePlay: gamePlayReducer
})
