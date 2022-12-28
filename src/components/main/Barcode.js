import styled from "styled-components";
// lib
import * as styles from "lib/styles/styles";
import media from "lib/styles/media";

const Barcode = () => {
  return <Content src="/images/barcode.png" alt="" />;
};

const Content = styled.img`
  position: absolute;
  width: 320px;
  left: calc(2rem + 100px);
  bottom: 4rem;
  transform-origin: left bottom;
  transform: rotate(-90deg);
  ${styles.noselect}

  ${media.small} {
    transform: rotate(0deg);
    width: 280px;
    max-width: calc(100% - 32px);
    left: 0;
    right: 0;
    bottom: 2rem;
    margin: auto;
  }

  @media screen and (max-height: 600px) and (orientation: landscape) {
    display: none;
  }
`;

export default Barcode;
