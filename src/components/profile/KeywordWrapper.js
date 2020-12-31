import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const KeywordWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	margin: 3rem 0;
	border-left: 3px solid ${palette.orange4};
	box-sizing: border-box;
`;

export default KeywordWrapper