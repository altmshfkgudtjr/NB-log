import styled from "styled-components";
// lib
import media from "lib/styles/media";

const ExperienceContent = ({
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
      display: inline-block;
      position: relative;
      padding: 4px 4px 6px;
      background-color: transparent;
      color: #000;
      font-weight: 500;
      z-index: 0;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        background: linear-gradient(90deg, #d0ecff 0%, #f6f6f6 100%);
        transform: skewY(-0.4deg);
        z-index: -1;
      }
    }

    a {
      color: #000;
      text-decoration: underline;
      text-underline-position: under;
      transition: 0.1s ease;

      &:hover {
        color: #025ee8;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  & * {
    font-size: 18px;
  }

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

export default ExperienceContent;
