import {combineReducers} from 'redux'
import gridSlice from './GridSlice/gridSlice'

export default combineReducers({
    grid: gridSlice,
})