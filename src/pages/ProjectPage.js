import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
// containers
import ProjectRoom from 'containers/project/ProjectRoom'
import Project from 'containers/project/Project'

const ProjectPage = ({ match }) => {
	const projectTitle = match.params['projectTitle'];
	
	// TODO [Project Focusing] 리액트스럽게 수정할 것
	/* 프로젝트 URL 부터 시작했을 때, 초기 가로 스크롤 이동 작업을 위해서 적용 */
	if (!projectTitle) document.isMoving = true;

	return (<>
		<Helmet>
			<title>NB#log - Project</title>
		</Helmet>

		<ProjectRoom projectTitle={projectTitle} />

		<Switch>
			<Route exact path="/project/:projectTitle" component={Project} />
		</Switch>
	</>);
}

export default ProjectPage