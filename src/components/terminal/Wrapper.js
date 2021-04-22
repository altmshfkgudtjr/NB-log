import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'
import animations from 'lib/styles/animations'

const Wrapper = ({ children }, ref) => {
	return (
		<Container>
			<Content ref={ref}>{children}</Content>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: 1s ${animations.fadeIn};
`;

const Content = styled.div`
	width: 100%;
	max-width: 800px;
	height: 100%;
	max-height: 560px;
	margin: auto;
	box-sizing: border-box;
	overflow-y: auto;
	${styles.scrollbar(6)};


	${media.small} {
		max-height: 76%;
		padding: 0 1rem;
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		padding: 0 1rem;
	}
`;

export default React.forwardRef(Wrapper)