const URL_BASE = 'http://localhost:3000';
const URL_API = '/api/users/';

export const saveUserData = async (uid, email, name) => {
	try {
		const response = await fetch(URL_BASE + URL_API, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ uid, email, name })
		});

		if (!response.ok) {
			throw new Error('No se pudo guardar el usuario en MongoDB');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error al guardar el usuario en MongoDB:', error);
		throw error;
	}
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
