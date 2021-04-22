import styled from 'styled-components'

const TextContent = ({ text }) => {
	return <Container>{text}</Container>;
}

const Container = styled.p`
	margin-bottom: 3rem;
`;

export default TextContent