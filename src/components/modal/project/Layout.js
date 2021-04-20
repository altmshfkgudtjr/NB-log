import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'

const Layout = ({ onMouseDown, children }) => {
	return (
		<Container 
			role="dialog"
			aria-modal="true" 
			onMouseDown={onMouseDown}
		>
			{children}
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 10;
	overflow-y: auto;
	${styles.scrollbar(10)};

	@media screen and (max-width: 800px) {
		&::-webkit-scrollbar {
			display: none;
		}
		&::-webkit-scrollbar-thumb {
			background: #ddd;
			border-radius: 10px;
		}
		&::-webkit-scrollbar-thumb:hover {
			background: #ccc;
		}
		&::-webkit-scrollbar-track {
			background: transparent;
		}
	}
`;

export default Layout