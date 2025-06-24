import styled from 'styled-components';

const StyledMainContainer = styled.section`
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

export { StyledMainContainer, StyledPhoto };
