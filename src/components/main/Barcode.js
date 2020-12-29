import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'

const Barcode = () => {
	return <Content src="/images/barcode.gif" alt="barcode" />;
}

const Content = styled.img`
	position: absolute;
	width: 200px;
	left: calc(2rem + 80px);
	bottom: 4rem;
	transform-origin: left bottom;
	transform: rotate(-90deg);
	${styles.noselect}

	${media.small} {
		transform: rotate(0deg);
		width: 160px;
		left: 0;
		right: 0;
		bottom: 4rem;
		margin: auto;
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		display: none;
	}
`;

export default Barcode