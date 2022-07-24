import {combineReducers} from 'redux'
import { todolist } from './reducer'

const headReducers =combineReducers({
      todolist,
})

export  default headReducers;