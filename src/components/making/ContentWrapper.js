import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const ContentWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}


const Container = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
	padding: 0 1rem;

	${media.small} {
		display: block;
		padding: 0;
	}
`;

export default ContentWrapper