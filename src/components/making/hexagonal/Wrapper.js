import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const Wrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: calc(100vh - 150px - 64px - 120px);

	& > svg {
		margin-bottom: 4rem;
	}

	${media.small} {
		height: calc(100vh - 126px - 56px - 80px);

		& > svg {
			margin-bottom: 2rem;
		}
	}
`;

export default Wrapper