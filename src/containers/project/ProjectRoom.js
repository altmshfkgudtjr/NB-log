import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// containers
import ProjectModal from 'containers/modal/Project'
// components
import Wrapper from 'components/project/Wrapper'
import ProjectWrapper from 'components/project/ProjectWrapper'
import ProjectCover from 'components/project/ProjectCover'
import ProjectCD from 'components/project/ProjectCD'
import ProjectBackground from 'components/project/ProjectBackground'
import MouseIcon from 'components/project/MouseIcon'
// modules
import { getProjects } from 'modules/json'
import { setProject } from 'modules/project'
import { pushModal } from 'modules/modal'
// lib
import { dragScreen } from 'lib/screenDrag'

const ProjectRoom = () => {
	const dispatch = useDispatch();

	const projects = useSelector(state => state.json.projects);

	const [peak, setPeak] = useState([]);



	const initPeak = () => {
		const peaks = peak.map(p => false);
		setPeak(peaks);
	}

	const onClickProject = (idx, project) => {
		dispatch(setProject(project));
		dispatch(pushModal(
			'PROJECT', 
			ProjectModal,
			{ onClose: initPeak }
		));
		let selected = [...peak];
		selected[idx] = true;
		setPeak(selected);
	}



	useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);

	useEffect(() => {
		const target = document.querySelector("#dragging");
		dragScreen(target);
		return () => target && (target.onmousedown = null);
	}, []);

	useEffect(() => {
		const peaks = [];
		projects.forEach(t => peaks.push(false));
		setPeak(peaks);
	}, [projects]);



	const ProjectList = projects.map(
		(data, idx) => (
			<ProjectWrapper key={idx} onClick={() => onClickProject(idx, data)}>
				<ProjectCover project={data} />
				<ProjectCD img={data.img} />
				<ProjectBackground selected={peak[idx]} color={data.color} />
			</ProjectWrapper>
		)
	);



	return (<>
		<Wrapper projectNum={projects.length}>
			{ProjectList}
		</Wrapper>
		
		<MouseIcon />
	</>);
}

export default ProjectRoom