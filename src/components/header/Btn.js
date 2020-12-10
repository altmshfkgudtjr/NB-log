import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'

const Btn = ({ onClick }) => {
	return (
		<Container onClick={onClick}>
			<Background />
			{/* SVG ICON: absolute */}
		</Container>
	);
}

const Container = styled.button`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 0;
	margin-right: 2rem;
	opacity: .6;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		opacity: 1;

		& > div {
			opacity: .8;
			transform: scale(.5, .5);
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
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	background-color: ${palette.gray1};
	opacity: 0;
	transform: scale(0, 0);
	transition: .2s ${styles.transition};
`;

export default Btn