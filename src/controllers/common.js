import Fetch from 'controllers/fetch'

export const getCount = () => {
	return Fetch('https://api.countapi.xyz/hit/altmshfkgudtjr.github.io/counter', "GET").then(res => {
		return res;
	});
}

export const getLike = () => {
	return Fetch('https://api.countapi.xyz/info/altmshfkgudtjr.github.io/profileLike', "GET").then(res => {
		return res;
	});
}

export const hitLike = () => {
	return Fetch('https://api.countapi.xyz/hit/altmshfkgudtjr.github.io/profileLike', "GET").then(res => {
		return res;
	});
}