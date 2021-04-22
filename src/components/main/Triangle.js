import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'

const Triangle = ({ message, onClick, pop=false }) => {
	return (
		<Container onClick={onClick} pop={pop}>
			<Message pop={pop}>{message}</Message>
		</Container>
	);
}

const Container = styled.button`
	display: block;
	position: absolute;
	width: 0;
	height: 0;
	padding: 0;
	margin-left: 75px;
	margin-top: -3px;
	border-style: solid;
	border-width: 130px 75px 0;
	transform-origin: 75px 133px;
	transition: .3s ${styles.transition};
	cursor: pointer;
	outline: none;

	&:nth-child(1) { 
		transform: ${props => props.pop
			? 'rotate(0deg) translate(0, -20px)'
			: 'rotate(0deg)'
		};
		border-color: ${palette.hexBlue} transparent;
	}
	&:nth-child(2) { 
		transform: ${props => props.pop
			? 'rotate(60deg) translate(0, -20px)'
			: 'rotate(60deg)'
		};
		border-color: ${palette.hexGreen} transparent;

		&:focus, &:hover {
			transform: rotate(60deg) translate(0, -10px);
		}
	}
	&:nth-child(3) { 
		transform: ${props => props.pop
			? 'rotate(120deg) translate(0, -20px)'
			: 'rotate(120deg)'
		};
		border-color: ${palette.hexPurple} transparent;

		&:focus, &:hover {
			transform: rotate(120deg) translate(0, -10px);
		}
	}
	&:nth-child(4) { 
		transform: ${props => props.pop
			? 'rotate(180deg) translate(0, -20px)'
			: 'rotate(180deg)'
		};
		border-color: ${palette.hexYellow} transparent;

		&:focus, &:hover {
			transform: rotate(180deg) translate(0, -10px);
		}
	}
	&:nth-child(5) { 
		transform: ${props => props.pop
			? 'rotate(240deg) translate(0, -20px)'
			: 'rotate(240deg)'
		};
		border-color: ${palette.hexRed} transparent;

		&:focus, &:hover {
			transform: rotate(240deg) translate(0, -10px);
		}
	}
	&:nth-child(6) { 
		transform: ${props => props.pop
			? 'rotate(300deg) translate(0, -20px)'
			: 'rotate(300deg)'
		};
		border-color: ${palette.hexOrange} transparent;

		&:focus, &:hover {
			transform: rotate(300deg) translate(0, -10px);
		}
	}

	&:focus, &:hover {
		opacity: .8;
	}

	&:focus span, &:hover span {
		top: -180px;
	}
`;

const Message = styled.span`
	display: block;
	position: absolute;
	top: ${props => props.pop
		? '-180px'
		: '-160px'
	};
	padding-bottom: 40px;
	transform: translateX(-50%);
	font-weight: 600;
	transition: .4s ${styles.transition};
	white-space: nowrap;
	z-index: 0;
`;

export default Triangle