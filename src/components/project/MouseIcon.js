import styled from "styled-components";
// lib
import animations from "lib/styles/animations";
import media from "lib/styles/media";

const MouseIcon = () => {
  return <Mouse />;
};

const Mouse = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 32px;
  height: 48px;
  border-radius: 48px;
  background: transparent;
  border: 2px solid black;

  &:before {
    // dot
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #000;
    left: 50%;
    top: 2px;
    transform: translate(-50%, 0);
    animation: ${animations.mouseWheel} 1.8s linear infinite;
  }

  &:after {
    // wheel
    content: "";
    position: absolute;
    width: 3px;
    height: 14px;
    border-radius: 3px;
    background: #000;
    left: 50%;
    top: 6px;
    transform: translate(-50%, 0);
  }

  ${media.small} {
    display: none;
  }

  @media (max-height: 928px) {
    display: none;
  }
`;

export default MouseIcon;
