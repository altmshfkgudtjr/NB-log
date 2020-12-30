import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'

const ImageContent = ({ src }) => {
	return (
		<Container>
			<Content src={src} alt="" />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	max-width: 320px;
	${styles.noselect};
`;

const Content = styled.img`
	max-width: 320px;
	display: block;
	margin: auto;

	${media.small} {
		max-width: 100%;
	}
`;

export default ImageContent