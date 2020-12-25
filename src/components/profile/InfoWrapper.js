import React from 'react'
import styled from 'styled-components'

const InfoWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	margin-bottom: 4rem;
`;

export default InfoWrapper