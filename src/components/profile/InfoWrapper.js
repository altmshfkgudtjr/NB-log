import styled from 'styled-components'

const InfoWrapper = ({ children }) => {
	return <Container role="list">{children}</Container>;
}

const Container = styled.section`
	margin-bottom: 4rem;
`;

export default InfoWrapper