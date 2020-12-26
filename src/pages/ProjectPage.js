import React from 'react'
import { Helmet } from 'react-helmet-async'
// containers
import ProjectRoom from 'containers/project/ProjectRoom'

const ProjectPage = () => {
	return (<>
		<Helmet>
			<title>NB#log - Project</title>
		</Helmet>

		<ProjectRoom />
	</>);
}

export default ProjectPage