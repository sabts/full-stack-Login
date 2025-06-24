import { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../config/firebase.config';
import { getDataById, updateDataById } from '../utils/api';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log('_ID DE moNGO:', user.uid);
				getUserInMongoDB(user.uid, setUser);
				updateUser(user.uid);
			} else {
				setUser(null);
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const getUserInMongoDB = async (uid, setUser) => {
	const user = await getDataById(uid);
	console.log('User desde MongoDB:', user);
	setUser(user);
};

const updateUser = async id => {
	event.preventDefault();
	const form = event.target;

	const body = {
		name: form.name.value
	};

	const userUpdated = await updateDataById(id, body);
	setUser(userUpdated);
	setIsEditing(false);
};

export default AuthProvider;
