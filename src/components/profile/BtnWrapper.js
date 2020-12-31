import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const BtnWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin: 2rem 0 3rem 0;

	${media.small} {
		justify-content: space-between;
	}
`;

export default BtnWrapper