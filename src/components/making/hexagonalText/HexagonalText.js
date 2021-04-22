import styled from 'styled-components'
// icons
import { HexaF, HexaB, HexaW, HexaE } from 'lib/icons'
// lib
import media from 'lib/styles/media'

const provideMap = {
	H: HexaF,
	B: HexaB,
	W: HexaW,
	E: HexaE
}

const HexagonalText = ({ type }) => {
	const Icon = provideMap[type]; 

	return (
		<Container>
			<Icon />
		</Container>
	);
}

const Container = styled.div`
	& > svg {
		width: 20vw;
		height: 240px;
		max-width: 160px;
	}

	${media.small} {
		padding: 0 1rem;
		
		& > svg {
			height: 200px;
			width: 32vw;
		}
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		padding: 0 1rem;
		
		& > svg {
			height: 200px;
			width: 20vw;
		}
	}
`;

export default HexagonalText