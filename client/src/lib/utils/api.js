const URL_BASE = 'http://localhost:3000';
const URL_API = '/api/users/';

export const registerUser = async (email, password, name) => {
	await fetch(URL_BASE + URL_API + id),
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ uid: user.uid, email, name, password })
		};
};

export const getDataById = async id => {
	try {
		const response = await fetch(URL_BASE + URL_API + id);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			return [];
		}
	} catch (error) {
		console.log(error);
	}
};
export const updateDataById = async (id, body) => {
	try {
		const response = await fetch(URL_BASE + URL_API + id, {
			method: 'PATCH',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		});
		console.log(URL_BASE + URL_API + id);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
