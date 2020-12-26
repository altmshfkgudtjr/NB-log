import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import Wrapper from 'components/project/Wrapper'
import ProjectWrapper from 'components/project/ProjectWrapper'
import ProjectCover from 'components/project/ProjectCover'
import ProjectCD from 'components/project/ProjectCD'
// modules
import { getProjects } from 'modules/json'
// lib
import { dragScreen } from 'lib/screenDrag'

const ProjectRoom = () => {
	const dispatch = useDispatch();
	const projects = useSelector(state => state.json.projects);

	const onClickProject = (title) => {
		console.log(title);
	}

	useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);

	useEffect(() => {
		dragScreen(document.querySelector("#dragging"));
		return () => document.querySelector("#dragging").onmousedown = null;
	}, []);

	const ProjectList = projects.map(
		(data, idx) => <ProjectWrapper key={idx} 
																	 onClick={() => onClickProject(data.title)}>
			<ProjectCover project={data} />
			<ProjectCD img={data.img} />
		</ProjectWrapper>
	);

	return (
		<Wrapper projectNum={projects.length}>{ProjectList}</Wrapper>
	);
}

export default ProjectRoom