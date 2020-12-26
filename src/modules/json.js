import produce from 'immer';
// data
import * as InfoJson from 'lib/data/info.json';
import * as CommandJson from 'lib/data/command.json';
import * as ProjectsJson from 'lib/data/projects.json';
import * as SentencesJson from 'lib/data/sentences.json';

/*
	Thunk Actions
*/
export const getInfo = () => dispatch => {
	const data = InfoJson.default;
	dispatch(setInfo(data));
}

export const getCommand = () => dispatch => {
	const data = CommandJson.default;
	dispatch(setCommand(data));
}

export const getProjects = () => dispatch => {
	const data = ProjectsJson.default;
	dispatch(setProjects(data));
}

export const getSentences = () => dispatch => {
	const data = SentencesJson.default;
	dispatch(setSentences(data));
}


/*
	Actions
*/
const SET_INFO = 'json/SET_INFO';
const SET_COMMAND = 'json/SET_COMMAND';
const SET_PROJECTS = 'json/SET_PROJECTS';
const SET_SENTENCES = 'json/SET_SENTENCES';

export const setInfo = (data) => ({ type: SET_INFO, payload: data });
export const setCommand = (data) => ({ type: SET_COMMAND, payload: data });
export const setProjects = (data) => ({ type: SET_PROJECTS, payload: data });
export const setSentences = (data) => ({ type: SET_SENTENCES, payload: data });


/*
	InitialState
*/
const initialState = {
	sentences: {
		concept: [],
		introduce: []
	},
	projects: [],
	info: {
		name: [],
		introduce: "",
		url: {},
		experience: [],
		prizes: [],
		skills: [],
		education: []
	},
	command: {}
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
				draft.sentences.introduce = action.payload.introduce;
			});

		default:
			return state;
	}
}

export default json