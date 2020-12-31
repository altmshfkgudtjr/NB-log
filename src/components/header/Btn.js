import React from 'react'
import styled from 'styled-components'
// component
import { Clip, Hexagonal, Inner, Outer, Print } from 'lib/icons'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const provideMap = {
	clip: Clip,
	hexagonal: Hexagonal,
	inner: Inner,
	outer: Outer,
	print: Print
};

const Btn = ({ icon, onClick }) => {
	const Icon = provideMap[icon];

	return (
		<Container onClick={onClick}>
			<Background />
			<IconBlock>
				<Icon />
			</IconBlock>
		</Container>
	);
}

const Container = styled.button`
	position: relative;
	width: 40px;
	height: 40px;
	cursor: pointer;
	padding: 0;
	margin-right: 2rem;
	opacity: .8;

	${media.small} {
		margin-right: 1rem;
	}

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		opacity: 1;

		& > div {
			opacity: .8;
			transform: scale(.7, .7);
		}
	}

	&:active {
		& > div {
			opacity: 1;
			transform: scale(1, 1);
		}
	}
`;

const Background = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 100%;
	background-color: ${palette.gray1};
	opacity: 0;
	transform: scale(0, 0);
	transition: .3s ${styles.transition};
`;

const IconBlock = styled.a`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	width: 24px;
	height: 24px;
	display: flex;
  align-items: center;
  justify-content: center;
	transition: .2s ${styles.transition};

	svg {
    width: 24px;
    height: 24px;
  }
`;

export default Btn