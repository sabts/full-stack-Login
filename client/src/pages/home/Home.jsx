import { useContext } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (
		<>
			<div>
				{!user && (
					<>
						<h1>Bienvenido(a)</h1>
					</>
				)}
				{user && (
					<>
						<h1>Bienvenido(a), {user.name}</h1>
					</>
				)}
			</div>
		</>
	);
};

export default Home;
