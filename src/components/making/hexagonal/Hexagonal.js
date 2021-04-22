import styled from 'styled-components'
// icon
import  { BigHexagonal } from 'lib/icons'
// lib
import animations from 'lib/styles/animations'

const Hexagonal = () => {
	return <Icon />;
}

const Icon = styled(BigHexagonal)`
	width: 60vw;
	max-width: 400px;
	stroke: black;
	stroke-width: .4;
	stroke-dashoffset: 272;
	stroke-dasharray: 272;
	fill: rgba(0,0,0,0);
	animation: 4s ${animations.hexagonalDraw} linear forwards;
`;

export default Hexagonal