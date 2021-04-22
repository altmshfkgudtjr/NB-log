import styled from 'styled-components'
import zIndex from 'lib/styles/zIndex'

const ProjectBackground = ({ selected, color }) => {
	const landscape = window.innerWidth > window.innerHeight;

	return <Container color={color}
							 			selected={selected}
							 			landscape={landscape} />;
}

const Container = styled.div`
	position: absolute;
	left: ${props => props.landscape
		? '-40vw'
		: '-25vh'
	};
	top: ${props => props.landscape
		? '-40vw'
		: '-25vh'
	};
	width: ${props => props.landscape
		? '100vw'
		: '100vh'
	};
	height: ${props => props.landscape
		? '100vw'
		: '100vh'
	};
	border-radius: 100%;
	background-color: ${props => props.color};
	transition: 1s ease-out;
	transform: ${props => props.selected
		? 'scale(3, 3)'
		: 'scale(0, 0)'
	};
	z-index: ${zIndex.modal};
`;

export default ProjectBackground