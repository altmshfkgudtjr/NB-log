import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'

const ImageContent = ({ src, alt }) => {
	return (
		<Container>
			<Content src={src} alt={alt} />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	margin: auto;
	max-width: 320px;
	${styles.noselect};
`;

const Content = styled.img`
	max-width: 320px;
	display: block;
	margin: 0 auto 0 auto;

	${media.small} {
		max-width: 100%;
		margin: 0 auto 1rem auto;
	}
`;

export default ImageContent