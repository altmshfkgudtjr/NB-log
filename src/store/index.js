import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
// Reducers
import modal from 'modules/modal'
import pageloading from 'modules/pageloading'

/* 
	Combine Reducers
*/
const reducers = combineReducers({
	modal,
	pageloading
});

/* 
	Create Store
*/
const store = createStore(
	reducers,
	applyMiddleware(ReduxThunk)
);

export default store