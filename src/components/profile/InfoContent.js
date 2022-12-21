import styled from "styled-components";
// lib
import media from "lib/styles/media";

const InfoContent = ({ time, management = "", content = "" }) => {
  return (
    <Container role="listitem">
      <Header>
        {management.length !== 0 && <strong>{management}</strong>}
        <span>({time})</span>
      </Header>
      {content.startsWith("<") ? (
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      ) : (
        content
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1rem;

  div {
    white-space: pre-wrap;

    mark {
      padding: 0 4px 2px;
      margin: 0 2px;
      color: #fff;
      background-color: #1e2030;
      border-radius: 4px;
      font-weight: 400;
      font-size: 14px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  & > strong {
    font-weight: 500;
    margin-right: 0.5rem;
  }

  ${media.small} {
    display: block;

    & > strong {
      display: block;
    }
  }
`;

export default InfoContent;
