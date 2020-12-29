import produce from 'immer';
// data
import * as InfoJson from 'lib/data/info.json';
import * as CommandJson from 'lib/data/command.json';
import * as ProjectsJson from 'lib/data/projects.json';
import * as SentencesJson from 'lib/data/sentences.json';
import * as MakingJson from 'lib/data/making.json';

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

export const getMaking = () => dispatch => {
	const data = MakingJson.default;
	dispatch(setMaking(data));
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