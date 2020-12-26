import React from 'react'
import styled from 'styled-components'

const ProjectWrapper = ({ onClick, children }) => {
	return <Container onClick={onClick}>{children}</Container>;
}

const Container = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	grid-column-end: span 2;
	cursor: pointer;

	&:nth-of-type(even) {
		margin-left: 50%;
	}

	&:hover {
		& > #cd {
			transform: translateX(80%) rotate(720deg);
		}

		& ::before {
			transform: rotate(-720deg);
		}
	}
`;

export default ProjectWrapper