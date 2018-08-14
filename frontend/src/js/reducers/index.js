import { combineReducers } from 'redux'
import highScoreReducer from './highScores'
import gamePlayReducer from './gamePlay'
import controllerReducer from './controller'

export default combineReducers({
  highScores: highScoreReducer,
  gamePlay: gamePlayReducer,
  controller: controllerReducer
})
