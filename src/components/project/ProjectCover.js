import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'

const ProjectCover = ({ project }) => {
	const PositionList = project.position.map((data, idx) => <div key={idx}>{data}</div>);
	const InfoList = project.info.map((data, idx) => <div key={idx}>{data}</div>);
	const TimeList = project.date.map((data, idx) => <div key={idx}>{data}</div>);
	const CollaboratorList = project.collaborator.map((data, idx) => <div key={idx}>{data}</div>);

	return (
		<Container color={project.color}>
			<Content>
				<div>
					<Info>
						{PositionList}
						<div>/</div>
						{InfoList}
					</Info>
					<Title>{project.title}</Title>
				</div>
				<BottomWrapper>
					<Time>
						{TimeList}
					</Time>
					<Collaborator>
						{CollaboratorList}
					</Collaborator>
				</BottomWrapper>
			</Content>
		</Container>
	);
}

const Container = styled.div`
	width: 50%;
	height: 100%;
	background-color: ${props => props.color};
	box-shadow: ${styles.boxShadow.regular};
	z-index: 5;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	max-height: 100vh;
	box-sizing: border-box;
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Info = styled.div`
	text-align: right;
	color: white;
	& > div {
		font-size: 12px;
		font-weight: 100;
	}
`;

const Title = styled.div`
	font-size: 54px;
	font-weight: 300;
	color: white;
	line-height: 1;
	padding-top: 8px;
`;

const BottomWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

const Time = styled.div`
	color: white;
	& > div {
		font-weight: 100;
	}
`;

const Collaborator = styled.div`
	color: white;
	text-align: right;
	& > div {
		font-size: 12px;
		font-weight: 100;
	}
`;

export default ProjectCover