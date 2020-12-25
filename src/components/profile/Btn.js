import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const Btn = ({ message, href }) => {
	return <Content href={href}
									alt={message}
									target="_blank_">{message}</Content>;
}

const Content = styled.a`
	padding: 0;
	margin-right: 3rem;
	color: ${palette.blue3};
	transition: .1s ${styles.transition};
	${styles.noselect};

	${media.small} {
		margin-right: 2rem;
	}

	&:hover {
		color: ${palette.orange4};
	}

	&:last-child {
		margin-right: 0;
	}
`;

export default Btn