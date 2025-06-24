import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../lib/context/AuthContext';
import { StyledMainContainer, StyledUl } from './menu-styles';

const Menu = () => {
	const { user } = useContext(AuthContext);

	return (
		<StyledMainContainer>
			<Link to='/'>
				<h1>Home</h1>
			</Link>

			{!user && (
				<nav>
					<StyledUl>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
					</StyledUl>
				</nav>
			)}

			{user && (
				<StyledUl>
					<ul>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					</ul>
				</StyledUl>
			)}
		</StyledMainContainer>
	);
};

export default Menu;
