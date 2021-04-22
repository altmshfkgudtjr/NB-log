import styled from 'styled-components'
// lib
import { scrollHorizontal } from 'lib/scrollHorizontal'
import media from 'lib/styles/media'

const Wrapper = ({ projectNum, children }) => {
	return (
		<Container id="dragging" onWheel={scrollHorizontal}>
			<Content projectNum={projectNum}>
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

	${media.small} {
		height: auto;
		overflow-x: hidden;
		overflow-y: auto;
		padding-bottom: 4rem;
	}

	@media screen and (max-height: 500px) and (orientation: landscape) {
		height: 100vh;
		overflow-x: auto;
		overflow-y: hidden;
		padding-bottom: 0;
	}
`;

const Content = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 360px);
	grid-template-columns: ${props => `repeat(${props.projectNum + 1}, 360px)`};
	grid-auto-flow: column;
	padding: 0 4rem;

	@media screen and (min-width: 3000px) {
		grid-template-rows: repeat(2, 500px);
		grid-template-columns: ${props => `repeat(${props.projectNum + 1}, 500px)`};
	}

	@media screen and (max-width: 1100px) and (orientation: landscape) {
		grid-template-rows: repeat(2, 300px);
		grid-template-columns: ${props => `repeat(${props.projectNum + 1}, 300px)`};
	}

	${media.small} {
		margin-top: 5rem;
		padding: 0 1rem;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		display: grid;
		grid-template-rows: repeat(1, 240px);
		grid-template-columns: ${props => `repeat(${props.projectNum * 2}, 240px)`};
		margin-top: 3rem;
	}
`;

export default Wrapper