import { useContext } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';

const Home = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<>
			<div>
				{!user && (
					<>
						<h1>Bienvenide</h1>
					</>
				)}
				{user && (
					<>
						<h1>Bienvenido, {user.name}</h1>
					</>
				)}
			</div>
		</>
	);
};

export default Home;
