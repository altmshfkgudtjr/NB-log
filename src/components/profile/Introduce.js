import styled from "styled-components";

const Introduce = ({ message }) => {
  return (
    <Content
      dangerouslySetInnerHTML={{
        __html: message,
      }}
    />
  );
};

const Content = styled.div`
  white-space: pre-wrap;

  mark {
    display: inline-block;
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
`;

export default Introduce;
