import produce from 'immer';

/*
	Thunk Actions
*/


/*
	Actions
*/
const OPEN_PAGE = 'pageloading/OPEN_PAGE';
const CLOSE_PAGE = 'pageloading/CLOSE_PAGE';

export const openPage = (location) => ({ type: OPEN_PAGE, payload: location });
export const closePage = () => ({ type: CLOSE_PAGE });


/*
	InitialState
*/
const initialState = {
	pageChanged: null
};


/*
	Reducer
*/
function pageloading(state = initialState, action) {
	switch(action.type) {
		case OPEN_PAGE:
			/* location changed */
			return produce(state, draft => {
				draft.pageChanged = action.payload;
			});

		case CLOSE_PAGE:
			/* state restoration */
			return produce(state, draft => {
				draft.pageChanged = null;
			});

		default:
			return state;
	}
}

export default pageloading