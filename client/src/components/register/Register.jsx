import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../lib/config/firebase.config';
import { AuthContext } from '../../lib/context/AuthContext';
import { saveUserData } from '../../lib/utils/api';
import {
	StyledButtonsContainer,
	StyledForm,
	StyledMainContainer
} from './resgister-styles';

const Register = () => {
	const { user } = useContext(AuthContext);

	return (
		<StyledMainContainer>
			{!user && (
				<>
					<StyledForm onSubmit={registerUser}>
						<h2>Crear Cuenta</h2>
						<input type='text' name='name' placeholder='Name' />
						<input type='text' name='email' placeholder='email' />
						<input type='password' name='password' placeholder='password' />
						<button type='submit'>Registrarse</button>
					</StyledForm>
					<span>Sign in With</span>
					<StyledButtonsContainer>
						<button>Google</button>
						<button>GitHub</button>
					</StyledButtonsContainer>
				</>
			)}
		</StyledMainContainer>
	);
};

const registerUser = async event => {
	event.preventDefault();
	const formData = event.target;
	const userName = formData.name.value;
	const email = formData.email.value;
	const password = formData.password.value;

	try {
		const userRegisterData = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userRegisterData.user;

		await saveUserData(user.uid, email, userName);
		console.log('Usuario guardado en Firebase y MongoDB');
	} catch (error) {
		console.log('Error en el registro:', error);
	}
};
export default Register;
