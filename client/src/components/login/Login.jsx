import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	return (
		<form>
			<h2>Iniciar Sesión</h2>
			<input type='text' name='email' placeholder='Email' />
			<input type='password' name='password' placeholder='Password' />
			<button>Entrar</button>
		</form>
	);
};
