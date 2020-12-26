import React from 'react'
import styled, { css } from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import animations from 'lib/styles/animations'

const Page = ({ onMouseDown, off, children }) => {
	return <Container onMouseDown={onMouseDown} off={off}>{children}</Container>;
}

const Container = styled.div`
	width: 718px;
	height: 1016px;
	max-width: 100%;
	max-height: 100%;
	box-sizing: border-box;
	padding: 2rem;
	background-color: #fff;
	box-shadow: ${styles.boxShadow.regular};
	margin: 2rem auto;
	${props => props.off
		? css`animation: .6s ${animations.fadeOutBottom}`
		: css`animation: .6s ${animations.fadeInBottom}`
	};
`;

export default Page