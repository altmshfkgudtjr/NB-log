import styled from 'styled-components'

const Introduce = ({ message }) => {
	return <Content>{message}</Content>;
}

const Content = styled.p`
	white-space: pre-wrap;
`;

export default Introduce