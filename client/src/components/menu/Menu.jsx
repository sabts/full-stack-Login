import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../lib/context/AuthContext';

const Menu = () => {
	const { user } = useContext(AuthContext);

	return (
		<>
			<Link to='/'>
				<h1>Home</h1>
			</Link>

			{!user && (
				<nav>
					<ul>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
					</ul>
				</nav>
			)}

			{user && (
				<nav>
					<ul>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

export default Menu;
