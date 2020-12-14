import React from 'react'
import styled from 'styled-components'

const TypoWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	position: absolute;
	width: fit-content;
	height: fit-content;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	z-index: 1;
`;

export default TypoWrapper