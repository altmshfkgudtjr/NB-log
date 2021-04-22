import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import zIndex from 'lib/styles/zIndex'

const Layout = ({ onMouseDown, children }, ref) => {
	return (
		<Container 
			aria-modal="true" 
			onMouseDown={onMouseDown}
			tabIndex="0"
			ref={ref}
		>
			{children}
		</Container>
	);
}

const Container = styled.dialog`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: ${zIndex.modal};
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

export default React.forwardRef(Layout)