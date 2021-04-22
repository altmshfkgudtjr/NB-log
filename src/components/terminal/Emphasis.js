import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const Emphasis = ({ content }) => {
	return <Container>{content}</Container>;
}

const Container = styled.div`
	font-weight: 500 !important;
	color: ${palette.blue2};
`;

export default Emphasis