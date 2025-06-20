import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../lib/config/firebase.config';
import { AuthContext } from '../../lib/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { saveUserData } from '../../lib/utils/api';

const Register = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

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
		await createUserWithEmailAndPassword(auth, email, password);
		//Informacion que va a MongoDB
		//const saveNewUser = await saveUserData()
		// body = {
		// 	uid: user.uid,
		// 	email: email,
		// 	name: userName
		// }
	} catch (error) {
		console.log(error);
	}
};

// ReferenceError: uid is not defined
//     at registerUser (Register.jsx:39:39)

export default Register;
