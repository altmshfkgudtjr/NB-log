import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const Keyword = ({ message }) => {
	return <Container role="listitem">⦁ {message}</Container>;
}

const Container = styled.div`
	font-weight: 400;
	color: ${palette.gray7};
	margin: 0 0 1rem 1rem;
`;

export default Keyword