import produce from 'immer';

/*
	Thunk Actions
*/


/*
	Actions
*/
const SET_PROJECT = 'json/SET_PROJECT';
const CLEAR_PROJECT = 'json/CLEAR_PROJECT';

export const setProject = (data) => ({ type: SET_PROJECT, payload: data });
export const clearProject = () => ({ type: CLEAR_PROJECT });


/*
	InitialState
*/
const initialState = {
	project: {}
};


/*
	Reducer
*/
function json(state = initialState, action) {
	switch(action.type) {
		case SET_PROJECT:
			return produce(state, draft => {
				draft.project = action.payload;
			});

		case CLEAR_PROJECT:
			return produce(state, draft => {
				draft.project = {};
			});

		default:
			return state;
	}
}

export default json