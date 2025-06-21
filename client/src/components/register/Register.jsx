import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../lib/config/firebase.config';
import { AuthContext } from '../../lib/context/AuthContext';
import { saveUserData } from '../../lib/utils/api';

const Register = () => {
	const { user } = useContext(AuthContext);

	return (
		<>
			{!user && (
				<>
					<form onSubmit={registerUser}>
						<h2>Crear Cuenta</h2>
						<input type='text' name='name' placeholder='Name' />
						<input type='text' name='email' placeholder='email' />
						<input type='password' name='password' placeholder='password' />
						<button type='submit'>Registrarse</button>
					</form>
					<button>Conectarse con Google</button>
					<button>Conectarse con GitHub</button>
				</>
			)}
		</>
	);
};

const registerUser = async event => {
	event.preventDefault();
	const formData = event.target;
	const userName = formData.name.value;
	const email = formData.email.value;
	const password = formData.password.value;

	try {
		const userRegisterData = await createUserWithEmailAndPassword(auth, email, password);
		const user = userRegisterData.user;

		await saveUserData(user.uid, email, userName);
		console.log('Usuario guardado en Firebase y MongoDB');
	} catch (error) {
		console.log('Error en el registro:', error);
	}
};
export default Register;
