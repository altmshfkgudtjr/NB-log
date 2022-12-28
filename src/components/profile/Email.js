import styled from "styled-components";
// lib
import media from "lib/styles/media";

const Email = () => {
  return (
    <Container>
      <strong>E-Mail :</strong>&nbsp;<span>altmgudtjr@gmail.com</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 2rem 0 3rem 0;

  strong {
    font-weight: 500;
    color: #ff9800;
  }

  ${media.small} {
    justify-content: flex-start;
  }
`;

export default Email;
