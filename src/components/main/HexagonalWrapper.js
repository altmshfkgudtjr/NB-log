import styled from 'styled-components'
// lib
import animations from 'lib/styles/animations'
import media from 'lib/styles/media'

const HexagonalWrapper = ({ children }) => {
	return <Container><Content>{children}</Content></Container>;
}

const Container = styled.div`
	position: absolute;
	width: 400px;
	height: 400px;
	left: 0px;
	right: 0px;
	top: 0;
	bottom: 0px;
	margin: auto;
	animation: 120s ${animations.hexagonalSpin} linear infinite;

	${media.small} {
		top: -60px;
		width: 100%;
		height: 400px;
	}
`;

const Content =styled.div`
	height: 260px;
	width: 300px;
	padding: 70px 0;
	position: relative;
	margin: 0 auto;
	animation: 1.4s ${animations.zoomIn} ease;

	${media.small} {
		animation: 1.4s ${animations.zoomInHexaMobile} ease;
		transform: scale(.8);
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		animation: 1.4s ${animations.zoomInHexaMobile} ease;
		transform: scale(.8);
	}
`;

export default HexagonalWrapper