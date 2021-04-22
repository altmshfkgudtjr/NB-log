import styled from 'styled-components'

const TextContent = ({ keyword, text }) => {
	return (
		<div>
			<Title>{keyword}</Title>
			<Content>{text}</Content>
		</div>
	);
}

const Title = styled.h3`
	font-weight: 600;
	font-size: 20px;
	margin: 1rem 0;
`;

const Content = styled.p`
	word-break: keep-all;
`;

export default TextContent