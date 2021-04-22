import styled from 'styled-components'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const ContentWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}


const Container = styled.div`
	display: flex;
	gap: 2rem;
	padding: 0 1rem;
	padding-bottom: 2rem;

	${media.small} {
		display: block;
		padding: 0 0 2rem 0;
		border-bottom: 1px solid ${palette.gray1};
	}
`;

export default ContentWrapper