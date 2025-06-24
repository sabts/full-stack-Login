import { useContext } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { StyledMainContainer } from './home-styles';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (
		<StyledMainContainer>
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
		</StyledMainContainer>
	);
};

export default Home;
