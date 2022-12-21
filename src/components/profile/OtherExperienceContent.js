import styled from "styled-components";
// lib
import media from "lib/styles/media";

const OtherExperienceContent = ({
  time,
  place = "",
  link = "",
  content = "",
  role = "",
}) => {
  return (
    <Container role="listitem">
      <Header>
        {place.length !== 0 && (
          <>
            {link ? (
              <a
                href={link}
                target="_blank"
                referer="noreferer"
                rel="noreferrer"
              >
                <strong>{place}</strong>
              </a>
            ) : (
              <strong>{place}</strong>
            )}
          </>
        )}
        {time && <span>({time})</span>}
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
      {role && (
        <Role>
          <i>ROLE</i>
          {role}
        </Role>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 0.5rem 0.5rem 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ff9800;

  & > div {
    word-break: keep-all;
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

    a > mark {
      transition: 0.1s ease;

      &:hover {
        background-color: #025ee8;
        font-weight: 500;
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  a {
    color: #444;
    text-decoration: underline;
    text-underline-position: under;
    margin-right: 4px;
    transition: 0.1s ease;

    &:hover {
      color: #025ee8;
    }
  }

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

const Role = styled.p`
  font-weight: 400;
  margin-top: 12px;

  i {
    padding: 0 4px 2px;
    margin-right: 8px;
    background-color: #ff9800;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 700;
    font-style: normal;
    border-radius: 4px;
  }
`;

export default OtherExperienceContent;
