import styled from "styled-components";
// lib
import * as styles from "lib/styles/styles";
import media from "lib/styles/media";
import zIndex from "lib/styles/zIndex";

const ProjectCover = ({ project }) => {
  const PositionList = project.position.map((data, idx) => (
    <div key={idx}>{data}</div>
  ));
  const InfoList = project.info.map((data, idx) => <div key={idx}>{data}</div>);
  const TimeList = project.date.map((data, idx) => <div key={idx}>{data}</div>);
  const CollaboratorList = project.collaborator.map((data, idx) => (
    <div key={idx}>{data}</div>
  ));

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
          <Time>{TimeList}</Time>
          <Collaborator>{CollaboratorList}</Collaborator>
        </BottomWrapper>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.color};
  box-shadow: ${styles.boxShadow.regular};
  z-index: ${zIndex.projectCover};

  ${media.small} {
    width: 100%;
    height: 300px;
  }

  @media screen and (max-height: 600px) and (orientation: landscape) {
    width: 50%;
    height: 100%;
  }
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

  @media screen and (max-height: 600px) and (orientation: landscape) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 54px;
  font-weight: 300;
  color: white;
  line-height: 1;
  padding-top: 1rem;

  @media screen and (max-width: 1100px) and (orientation: landscape) {
    font-size: 48px;
  }

  ${media.small} {
    font-size: 40px;
  }

  @media screen and (max-height: 600px) and (orientation: landscape) {
    font-size: 38px;
  }

  @media screen and (max-width: 300px) {
    font-size: 38px;
  }
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

export default ProjectCover;
