import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../lib/config/firebase.config';
import { AuthContext } from '../../lib/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const {} = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<form>
			<h2>Crear Cuenta</h2>
			<input type='text' name='email' placeholder='email' />
			<input ttype='password' name='password' placeholder='password' />
			<button type='submit'>Registrarse</button>
		</form>
	);
};

export default Register;
