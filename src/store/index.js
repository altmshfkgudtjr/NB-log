import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
// Reducers
import modal from 'modules/modal'
import pageloading from 'modules/pageloading'
import json from 'modules/json'
import project from 'modules/project'

/* 
	Combine Reducers
*/
const reducers = combineReducers({
	modal,
	pageloading,
	json,
	project
});

/* 
	Create Store
*/
const store = createStore(
	reducers,
	applyMiddleware(ReduxThunk)
);

export default store