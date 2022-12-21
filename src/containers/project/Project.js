import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// containers
import ProjectModal from "containers/modal/Project";
// modules
import { setProject } from "modules/project";
import { pushModal } from "modules/modal";

const Project = () => {
  const params = useParams();
  const projectTitle = params["projectTitle"];

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.json.projects);

  useEffect(() => {
    const project = projects.filter(
      (p) => p.title.toLowerCase() === projectTitle
    );
    if (project.length === 0) return;

    dispatch(setProject(project[0]));
    dispatch(pushModal("PROJECT", ProjectModal));
  }, [dispatch, projects, projectTitle]);

  // TODO [Project Focusing] 리액트스럽게 수정할 것
  /* 프로젝트 URL 부터 시작했을 때, 초기 가로 스크롤 이동 작업을 위해서 적용 */
  useEffect(() => {
    if (document.isMoving || projects.length === 0) return;
    document.isMoving = true;
    const projects_ = projects.map(
      (p) => p.title.toLowerCase() === projectTitle
    );
    const idx = projects_.indexOf(true);
    const target = document.querySelector("#dragging");
    target.scrollLeft = target.clientWidth * (idx / projects_.length);
  }, [projects, projectTitle]);

  return null;
};

export default Project;
