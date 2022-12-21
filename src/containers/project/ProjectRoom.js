import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// components
import Wrapper from "components/project/Wrapper";
import ProjectWrapper from "components/project/ProjectWrapper";
import ProjectCover from "components/project/ProjectCover";
import ProjectCD from "components/project/ProjectCD";
import ProjectBackground from "components/project/ProjectBackground";
import MouseIcon from "components/project/MouseIcon";
// modules
import { getProjects } from "modules/json";
// lib
import { dragScreen } from "lib/screenDrag";

const ProjectRoom = ({ projectTitle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.json.projects);
  const [peak, setPeak] = useState([]);

  const onClickProject = (idx, project) => {
    let selected = [...peak];
    selected[idx] = true;
    setPeak(selected);

    navigate(`/project/${project.title.toLowerCase()}`);
  };

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useEffect(() => {
    const target = document.querySelector("#dragging");
    dragScreen(target);
    return () => target && (target.onmousedown = null);
  }, []);

  useEffect(() => {
    if (!projectTitle) {
      const peaks = new Array(peak.length);
      const peaks_ = peaks.map((p) => false);
      setPeak(peaks_);
    } else {
      const peaks = projects.map((p) => p.title.toLowerCase() === projectTitle);
      setPeak(peaks);
    }
  }, [dispatch, projectTitle, projects, peak.length, setPeak]);

  useEffect(() => {
    const peaks = [];
    projects.forEach((t) => peaks.push(false));
    setPeak(peaks);
  }, [projects]);

  const ProjectList = projects.map((data, idx) => (
    <ProjectWrapper key={idx} onClick={() => onClickProject(idx, data)}>
      <ProjectCover project={data} />
      <ProjectCD img={data.img} />
      <ProjectBackground selected={peak[idx]} color={data.color} />
    </ProjectWrapper>
  ));

  return (
    <>
      <Wrapper projectNum={projects.length}>{ProjectList}</Wrapper>

      <MouseIcon />
    </>
  );
};

export default ProjectRoom;
