import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const ProjectWrapper = ({ onClick, children }) => {
	return <Container onClick={onClick}>{children}</Container>;
}

const Container = styled.button`
	position: relative;
	display: flex;
	width: 100%;
	padding: 0;
	margin: 0;
	text-align: left;
	grid-column-end: span 2;
	cursor: pointer;

	&:nth-of-type(even) {
		margin-left: 50%;
	}

	&:focus, &:hover {
		& > #cd {
			transform: translateX(80%) rotate(720deg);
		}

		& ::before {
			transform: rotate(-720deg);
		}
	}

	${media.small} {
		&:nth-of-type(even) {
			margin-left: 0;
		}

		margin-bottom: 1rem;
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		&:nth-of-type(even) {
			margin-left: 0;
		}

		margin-bottom: 0rem;
	}
`;

export default ProjectWrapper