import styled from "styled-components";
// lib
import animations from "lib/styles/animations";
import media from "lib/styles/media";

const Name = ({ message, show }) => {
  return <Content show={show}>{message}</Content>;
};

const Content = styled.div`
  font-size: 48px;
  padding-top: 16px;
  animation: 0.4s
    ${(props) => (props.show ? animations.fadeInBottom : animations.fadeOutTop)};

  ${media.small} {
    font-size: 32px;
    padding-top: 16px;
  }

  @media screen and (max-height: 600px) and (orientation: landscape) {
    font-size: 32px;
    padding-top: 16px;
  }
`;

export default Name;
