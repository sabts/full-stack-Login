import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateDataById } from '../../lib/utils/api';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';
import { AuthContext } from '../../lib/context/AuthContext';
import { StyledMainContainer, StyledPhoto } from './profile-styles';

const Profile = () => {
	const { user, setUser } = useContext(AuthContext);
	const [nameInput, setNameInput] = useState(user?.name || '');
	const [isEditing, setIsEditing] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) setNameInput(user.name);
	}, [user]);

	if (!user) {
		return <h2>No User</h2>;
	}
	return (
		<StyledMainContainer>
			<Link to='/'>
				<button>back to users</button>
			</Link>
			<div>
				{!isEditing ? (
					<>
						<StyledPhoto />
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
							<StyledPhoto />
							<div>
								<label htmlFor='name'>Nombre</label>
								<input
									type='text'
									id='name'
									name='name'
									defaultValue={nameInput}
									onChange={e => setNameInput(e.target.value)}
								/>
							</div>
							<input
								type='submit'
								value='GUARDAR CAMBIOS'
								onClick={event => updateUser(id)}
							/>
						</form>
						<button onClick={() => setIsEditing(false)}>CANCELAR</button>
					</>
				)}
			</div>
		</StyledMainContainer>
	);
};

const updateUser = async (id, event) => {
	event.preventDefault();
	const form = event.target;

	const body = {
		name: form.name.value
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
