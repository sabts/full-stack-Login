import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDataById, updateDataById } from '../../lib/utils/api';

const Profile = () => {
	const { id } = useParams();
	const [user, setUser] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		getDataUser(setUser, id);
	}, [id]);

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
						<h2>{user.userName}</h2>
						<span>{user.email}</span>
						<div>
							<button onClick={() => setIsEditing(true)}>Edit</button>
							<button onClick={() => logout(navigate)}>Log Out</button>
						</div>
					</>
				) : (
					<>
						<form
							onSubmit={event => updateUser(id, event, setUser, setIsEditing)}
						>
							<div>foto</div>
							<div>
								<label htmlFor='userName'>Nombre</label>
								<input
									type='text'
									id='fullName'
									name='userName'
									defaultValue={user.userName}
								/>
							</div>
							<div>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									id='email'
									name='email'
									defaultValue={user.email}
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

const getDataUser = async (setUser, id) => {
	const user = await getDataById(id);
	setUser(user);
};

const updateUser = async (id, event, setUser, setIsEditing) => {
	event.preventDefault();
	const form = event.target;

	const body = {
		userName: form.userName.value,
		email: form.email.value
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
