import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const Wrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	width: 80vw;
	max-width: 1000px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow-x: auto;
	margin-bottom: 2rem;

	${media.small} {
		width: 100vw;
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		width: 100vw;
	}
`;

export default Wrapper