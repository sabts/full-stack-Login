import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';
import { AuthContext } from '../../lib/context/AuthContext';
import {
	StyledBackButton,
	StyledButtonsContainer,
	StyledEdtUserProfile,
	StyledFieldDiv,
	StyledMainContainer,
	StyledPhoto,
	StyledUserProfile
} from './profile-styles';

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
				<StyledBackButton>back to users</StyledBackButton>
			</Link>
			<StyledUserProfile>
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
						<StyledEdtUserProfile>
							<StyledPhoto />
							<StyledFieldDiv>
								<label htmlFor='name'>Nombre</label>
								<input
									type='text'
									id='name'
									name='name'
									defaultValue={nameInput}
									onChange={e => setNameInput(e.target.value)}
								/>
							</StyledFieldDiv>
							<StyledButtonsContainer>
								<input type='submit' value='SAVE CHANGES' />
								<button onClick={() => setIsEditing(false)}>CANCEL</button>
							</StyledButtonsContainer>
						</StyledEdtUserProfile>
					</>
				)}
			</StyledUserProfile>
		</StyledMainContainer>
	);
};

const logout = async navigate => {
	await signOut(auth);
	navigate('/');
};
export default Profile;
