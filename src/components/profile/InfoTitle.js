import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const InfoTitle = ({ message }) => {
	return <Content>{message}</Content>;
}

const Content = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 1rem;
	text-transform: uppercase;
	color: ${palette.orange4};
`;

export default InfoTitle