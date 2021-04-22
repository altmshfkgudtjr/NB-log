import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const LargeText = ({ message }) => {
	return <Content>{message}</Content>;
}

const Content = styled.div`
	position: absolute;
	font-size: 120px;
	font-weight: 800;
	color: ${palette.gray2};
	right: calc(2rem + 160px);
	bottom: 4rem;
	transform-origin: right bottom;
	transform: rotate(90deg);
	${styles.noselect}

	${media.small} {
		display: none;
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		display: none;
	}
`;

export default LargeText