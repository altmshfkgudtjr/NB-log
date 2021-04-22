import styled from 'styled-components'

const Footer = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	min-height: 16rem;
`;

export default Footer