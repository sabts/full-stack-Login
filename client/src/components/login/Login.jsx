import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../lib/config/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';

const Login = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<>
			{!user && (
				<>
					<form onSubmit={event => loginUser(event, navigate)}>
						<h2>Iniciar Sesión</h2>
						<input type='text' name='email' placeholder='Email' />
						<input type='password' name='password' placeholder='Password' />
						<button>Entrar</button>
					</form>
					<button>Conectarse con Google</button>
					<button>Conectarse con GitHub</button>
				</>
			)}
		</>
	);
};

const loginUser = async (event) => {
	event.preventDefault();
	const formData = event.target;
	const email = formData.email.value;
	const password = formData.password.value;

	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(error);
	}
};

export default Login;
