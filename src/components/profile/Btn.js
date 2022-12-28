import styled from "styled-components";
// lib
import * as styles from "lib/styles/styles";
import media from "lib/styles/media";
import palette from "lib/styles/palette";

const Btn = ({ message, href, isPrint = false }) => {
  const showUrl = href.startsWith("mailto:") ? href.slice(7) : href;
  return (
    <Container isPrint={isPrint} role="listitem">
      <Content href={href} alt={message} target="_blank_" isPrint={isPrint}>
        {message}
      </Content>
      {isPrint && <span> : {showUrl}</span>}
    </Container>
  );
};

const Container = styled.div`
  margin-right: 3rem;

  ${media.small} {
    width: ${(props) => (props.isPrint ? "100%" : "33%")};
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const Content = styled.a`
  display: inline-block;
  padding: 0;
  width: ${(props) => (props.isPrint ? "80px;" : "auto")};
  color: ${palette.blue3};
  transition: 0.1s ${styles.transition};

  &:hover {
    color: ${palette.orange4};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default Btn;
