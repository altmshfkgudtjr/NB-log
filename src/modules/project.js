import produce from 'immer';

/*
	Thunk Actions
*/


/*
	Actions
*/
const SET_PROJECT = 'json/SET_PROJECT';

export const setProject = (data) => ({ type: SET_PROJECT, payload: data });


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

		default:
			return state;
	}
}

export default json