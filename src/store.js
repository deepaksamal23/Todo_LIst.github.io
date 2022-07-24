import {createStore} from 'redux'
import headReducers from './redux/reducers/main'

const store  =createStore(
      headReducers
)

export default store;