import React from 'react'
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

	${media.small} {
		padding: 0 1rem;
	}
`;

export default Wrapper