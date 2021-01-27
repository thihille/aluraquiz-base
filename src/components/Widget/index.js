import styled from "styled-components";

const Widget = styled.div`
  width: 80%;
  margin: 34px auto 0 auto;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background: linear-gradient(
    225deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  background-size: 400% 400%;
  -webkit-animation: AninHeaderSantuario
    ${({ theme }) => theme.animations.default};
  -moz-animation: AninHeaderSantuario ${({ theme }) => theme.animations.default};
  animation: AninHeaderSantuario ${({ theme }) => theme.animations.default};

  * {
    margin: 0;
  }

  @-webkit-keyframes AninHeaderSantuario {
    0% {
      background-position: 0% 99%;
    }
    50% {
      background-position: 100% 2%;
    }
    100% {
      background-position: 0% 99%;
    }
  }
  @-moz-keyframes AninHeaderSantuario {
    0% {
      background-position: 0% 99%;
    }
    50% {
      background-position: 100% 2%;
    }
    100% {
      background-position: 0% 99%;
    }
  }
  @keyframes AninHeaderSantuario {
    0% {
      background-position: 0% 99%;
    }
    50% {
      background-position: 100% 2%;
    }
    100% {
      background-position: 0% 99%;
    }
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
