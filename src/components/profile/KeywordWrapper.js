import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const KeywordWrapper = ({ children }) => {
	return <Container role="list">{children}</Container>;
}

const Container = styled.section`
	margin: 3rem 0;
	border-left: 3px solid ${palette.orange4};
	box-sizing: border-box;
`;

export default KeywordWrapper