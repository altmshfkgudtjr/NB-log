import React from 'react'
import styled from 'styled-components'

const TextContent = ({ text }) => {
	return <Container>{text}</Container>;
}

const Container = styled.div`
	margin-bottom: 3rem;
`;

export default TextContent