import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateDataById } from '../../lib/utils/api';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';
import { AuthContext } from '../../lib/context/AuthContext';

const Profile = () => {
	const { user, setUser } = useContext(AuthContext);
	const [isEditing, setIsEditing] = useState(false);
	const navigate = useNavigate();

	if (!user) {
		return <h2>No User</h2>;
	}

	const { email, userName } = user;

	return (
		<>
			<Link to='/'>
				<button>back to users</button>
			</Link>
			<div>
				{!isEditing ? (
					<>
						<div>foto</div>
						<h2>{user.name}</h2>
						<span>{user.email}</span>
						<div>
							<button onClick={() => setIsEditing(true)}>Edit</button>
							<button onClick={() => logout(navigate)}>Log Out</button>
						</div>
					</>
				) : (
					<>
						<form
							onSubmit={event => updateUser(uid, event, setUser, setIsEditing)}
						>
							<div>foto</div>
							<div>
								<label htmlFor='name'>Nombre</label>
								<input
									type='text'
									id='name'
									name='userName'
									defaultValue={user.name}
								/>
							</div>
							<input type='submit' value='GUARDAR CAMBIOS' />
						</form>
						<button onClick={() => setIsEditing(false)}>CANCELAR</button>
					</>
				)}
			</div>
		</>
	);
};

const updateUser = async (id, event, setUser, setIsEditing) => {
	event.preventDefault();
	const form = event.target;

	const body = {
		name: form.userName.value
	};

	const userUpdated = await updateDataById(id, body);
	setUser(userUpdated);
	setIsEditing(false);
};

const logout = async navigate => {
	await signOut(auth);
	navigate('/');
};
export default Profile;
