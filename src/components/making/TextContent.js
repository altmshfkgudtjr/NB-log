import React from 'react'
import styled from 'styled-components'

const TextContent = ({ keyword, text }) => {
	return (
		<div>
			<Title>{keyword}</Title>
			<Content>{text}</Content>
		</div>
	);
}

const Title = styled.div`
	font-weight: 600;
	font-size: 20px;
	margin-bottom: 1rem;
`;

const Content = styled.div`
	word-break: keep-all;
`;

export default TextContent