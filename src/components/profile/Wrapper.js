import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const Wrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: 4rem auto 0 auto;
	box-sizing: border-box;

	@media screen and (max-width: 1000px) {
		padding: 0 2rem;
	}

	${media.small} {
		padding: 0 1rem;
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		padding: 0 1rem;
	}
`;

export default Wrapper