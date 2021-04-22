import styled from 'styled-components'
// icons
import { Close } from 'lib/icons'
// lib
import * as styles from 'lib/styles/styles'
import animations from 'lib/styles/animations'
import { mediaQuery } from 'lib/styles/media'

const CloseBtn = ({ off, onClick }) => {
	return (
		<Wrapper off={off} onClick={onClick} autoFocus>
			<Icon />
			<Text>CLOSE</Text>
		</Wrapper>
	);
}

const Wrapper = styled.button`
	display: flex;
	align-items: center;
	position: fixed;
	right: 2rem;
	top: 2rem;
	padding-right: 1rem;
	animation: ${({ off }) => off
		? animations.fadeOutRight
		: animations.fadeInRight
	};
	animation-duration: .8s;
	opacity: .6;
	outline: none;

	&:focus, &:hover {
		opacity: 1;
	}

	${mediaQuery(1000)} {
		display: none;
	}
`;

const Icon = styled(Close)`
	width: 18px;
	height: 18px;
	padding: 5.5px 0 2.5px 0;
	transition: .2s ${styles.transition};
`;

const Text = styled.span`
	font-size: 18px;
	line-height: 32px;
	font-weight: 600;
	margin-left: .5rem;
	color: #ffffff;
`;

export default CloseBtn