import React from 'react'
import styled from 'styled-components'
// icon
import  { BigHexagonal } from 'lib/icons'
// lib
import animations from 'lib/styles/animations'

const Hexagonal = () => {
	return <Icon />;
}

const Icon = styled(BigHexagonal)`
	width: 50vw;
	max-width: 400px;
	stroke: black;
	stroke-dashoffset: 272;
	stroke-dasharray: 272;
	animation: 4s ${animations.hexagonalDraw} linear forwards;
	animation-delay: 1s;
`;

export default Hexagonal