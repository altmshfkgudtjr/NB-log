import React from 'react'
import styled from 'styled-components'

const Wrapper = ({ children }) => {
	return (
		<Container id="dragging">
			<Content>
				{children}
			</Content>
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	overflow-y: hidden;
	overflow-x: auto;
	display: flex;
	align-items: center;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const Content = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 360px);
	grid-template-columns: repeat(7, 360px);
	grid-auto-flow: column;
	padding: 0 4rem;
`;

export default Wrapper