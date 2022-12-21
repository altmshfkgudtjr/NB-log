import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
// components
import Layout from "components/modal/project/Layout";
import Page from "components/modal/project/Page";
import PageTitle from "components/modal/project/PageTitle";
import PageInfo from "components/modal/project/PageInfo";
import ImageContent from "components/modal/project/ImageContent";
import TextContent from "components/modal/project/TextContent";
import PageUrl from "components/modal/project/PageUrl";
import CloseBtn from "components/modal/project/CloseBtn";
import FakeFocusInput from "components/modal/common/FakeFocusInput";

const ProjectModal = ({ PreventModalOff, ModalOff }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = useSelector((state) => state.project.project);
  const ref = useRef(null);
  const [off, setOff] = useState(false);

  const Content =
    project.post &&
    project.post.map((data, idx) =>
      data.type === "image" ? (
        <ImageContent
          key={idx}
          src={data.content}
          size={data.size}
          color={project.color}
        />
      ) : (
        <TextContent key={idx} text={data.content} />
      )
    );

  const onClickBackground = useCallback(
    (e) => {
      PreventModalOff(e);
      navigate("/project");
      setTimeout(() => ModalOff(), 500);
      setOff(true);
    },
    [PreventModalOff, navigate, ModalOff]
  );

  const onFocusModal = (e) => {
    if (!ref.current) return;
    e.target.blur();
    ref.current.focus();
  };

  useEffect(() => {
    if (location.pathname === "/project" || location.pathname === "/project/") {
      setTimeout(() => ModalOff(), 500);
      setOff(true);
    }
  }, [location.pathname, ModalOff, setOff]);

  return (
    <>
      <FakeFocusInput onFocus={onFocusModal} />

      <Layout onMouseDown={onClickBackground} ref={ref}>
        <CloseBtn off={off} onClick={onClickBackground} />

        <Page onMouseDown={PreventModalOff} off={off}>
          <PageTitle title={project.title} />
          <PageInfo
            infoList={project.position}
            collaborator={project.collaborator}
          />
          {Content}
          <PageUrl url={project.url} color={project.color} />
        </Page>
      </Layout>

      <FakeFocusInput onFocus={onFocusModal} />
    </>
  );
};

export default ProjectModal;
