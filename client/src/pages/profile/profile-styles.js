import styled from 'styled-components';

const StyledMainContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 24px;
	gap: 24px;
`;

const StyledUserProfile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
`;

const StyledEdtUserProfile = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
`;

const StyledPhoto = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background-color: black;
`;

const StyledFieldDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledBackButton = styled.button`
	align-self: left;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 8px;
`;

export {
	StyledMainContainer,
	StyledPhoto,
	StyledBackButton,
	StyledUserProfile,
	StyledEdtUserProfile,
	StyledFieldDiv,
	StyledButtonsContainer
};
