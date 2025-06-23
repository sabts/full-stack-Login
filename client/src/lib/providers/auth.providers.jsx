import { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../config/firebase.config';
import { getDataById } from '../utils/api';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log('_ID DE moNGO:', user.uid);
				getUserInMongoDB(user.uid, setUser);
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
console.log("User desde MongoDB:", user)
setUser(user)
}

export default AuthProvider;
