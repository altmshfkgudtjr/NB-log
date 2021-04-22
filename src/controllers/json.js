import Fetch from 'controllers/fetch'

export const getCommand = () => {
	return Fetch('/storage/command.json', "GET").then(res => {
		return res;
	});
}

export const getInfo = () => {
	return Fetch('/storage/info.json', "GET").then(res => {
		return res;
	});
}

export const getMaking = () => {
	return Fetch('/storage/making.json', "GET").then(res => {
		return res;
	});
}

export const getProjects = () => {
	return Fetch('/storage/projects.json', "GET").then(res => {
		return res;
	});
}

export const getSentences = () => {
	return Fetch('/storage/sentences.json', "GET").then(res => {
		return res;
	});
}