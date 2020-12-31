import produce from 'immer';
// controllers
import * as jsonAPI from 'controllers/json'

/*
	Thunk Actions
*/
export const getInfo = () => dispatch => {
	return jsonAPI.getInfo().then(data => {
		dispatch(setInfo(data));
	});
}

export const getCommand = () => dispatch => {
	return jsonAPI.getCommand().then(data => {
		dispatch(setCommand(data));
	});
}

export const getProjects = () => dispatch => {
	return jsonAPI.getProjects().then(data => {
		dispatch(setProjects(data));
	});
}

export const getSentences = () => dispatch => {
	return jsonAPI.getSentences().then(data => {
		dispatch(setSentences(data));
	});
}

export const getMaking = () => dispatch => {
	return jsonAPI.getMaking().then(data => {
		dispatch(setMaking(data));
	});
}


/*
	Actions
*/
const SET_INFO = 'json/SET_INFO';
const SET_COMMAND = 'json/SET_COMMAND';
const SET_PROJECTS = 'json/SET_PROJECTS';
const SET_SENTENCES = 'json/SET_SENTENCES';
const SET_MAKING = 'json/SET_MAKING';

export const setInfo = (data) => ({ type: SET_INFO, payload: data });
export const setCommand = (data) => ({ type: SET_COMMAND, payload: data });
export const setProjects = (data) => ({ type: SET_PROJECTS, payload: data });
export const setSentences = (data) => ({ type: SET_SENTENCES, payload: data });
export const setMaking = (data) => ({ type: SET_MAKING, payload: data });


/*
	InitialState
*/
const initialState = {
	sentences: {
		concept: []
	},
	projects: [],
	info: {
		name: [],
		introduce: "",
		keyword: [],
		url: {},
		experience: [],
		prizes: [],
		skills: [],
		education: []
	},
	command: {},
	making: []
};


/*
	Reducer
*/
function json(state = initialState, action) {
	switch(action.type) {
		case SET_INFO:
			return produce(state, draft => {
				draft.info.name = action.payload.name;
				draft.info.introduce = action.payload.introduce;
				draft.info.keyword = action.payload.keyword;
				draft.info.url = action.payload.url;
				draft.info.experience = action.payload.experience;
				draft.info.prizes = action.payload.prizes;
				draft.info.skills = action.payload.skills;
				draft.info.education = action.payload.education;
			});

		case SET_COMMAND:
			return produce(state, draft => {
				draft.command = action.payload;
			});

		case SET_PROJECTS:
			return produce(state, draft => {
				draft.projects = action.payload.projects;
			});

		case SET_SENTENCES:
			return produce(state, draft => {
				draft.sentences.concept = action.payload.concept;
			});

		case SET_MAKING:
			return produce(state, draft => {
				draft.making = action.payload.content;
			});

		default:
			return state;
	}
}

export default json