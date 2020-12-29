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

	${media.small} {
		display: block;
	}
`;

export default ContentWrapper