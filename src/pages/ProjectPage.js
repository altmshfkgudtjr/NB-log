import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// containers
import ProjectRoom from "containers/project/ProjectRoom";
import Project from "containers/project/Project";

const ProjectPage = () => {
  const params = useParams();
  const projectTitle = params["projectTitle"];

  if (!projectTitle) document.isMoving = true;

  return (
    <>
      <Helmet>
        <title>NB#log - Project</title>
      </Helmet>

      <ProjectRoom projectTitle={projectTitle} />

      {projectTitle && <Project />}
    </>
  );
};

export default ProjectPage;
