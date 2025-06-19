import { useContext } from 'react';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import { AuthContext } from '../../lib/context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (<>
			     <div>
      {user ? (
		<>
        <h1>Bienvenido, {user.name}</h1>
		<Link to={`/${user.uid}`}>
		<button>Ir a mi perfil</button>
		</Link>
		</>
      ) : (
        <h1>Bienvenido</h1>
      )}
    </div>
			<Register/>
			<Login/>
		</>
	)
};
export default Home;
