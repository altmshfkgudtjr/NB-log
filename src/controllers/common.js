import Fetch from 'controllers/fetch'

export const getCount = () => {
	return Fetch('https://api.counterapi.dev/v1/altmshfkgudtjr.github.io/counter/up', "GET").then(res => {
		return res;
	});
}

export const getLike = () => {
	return Fetch('https://api.counterapi.dev/v1/altmshfkgudtjr.github.io/profileLike', "GET").then(res => {
		return res;
	});
}

export const hitLike = () => {
	return Fetch('https://api.counterapi.dev/v1/altmshfkgudtjr.github.io/profileLike/up', "GET").then(res => {
		return res;
	});
}