import styled, { css } from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import animations from 'lib/styles/animations'

const Page = ({ onMouseDown, off, children }) => {
	return <Container onMouseDown={onMouseDown} off={off}>{children}</Container>;
}

const Container = styled.div`
	width: 718px;
	max-width: 100%;
	box-sizing: border-box;
	padding: 2rem;
	background-color: #fff;
	box-shadow: ${styles.boxShadow.regular};
	margin: 2rem auto;
	${props => props.off
		? css`animation: .6s ${animations.fadeOutBottom}`
		: css`animation: .6s ${animations.fadeInBottom}`
	};

	@media screen and (max-width: 800px) {
		border-radius: 12px 12px 0 0;
		margin: 4rem auto 0 auto;
		padding: 1rem;
	}
`;

export default Page