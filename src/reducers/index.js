import {combineReducers} from "redux";
import counterReducers from './counter_reducer.js'

const counterApp = combineReducers({
	count : counterReducers
})

export default counterApp;