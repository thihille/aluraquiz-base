import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 450px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  padding-top: 45px;
  margin: auto 0;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
QuizContainer.QuizWrapper = styled.div``;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizContainer.QuizWrapper>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
        </QuizContainer.QuizWrapper>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thihille" />
    </QuizBackground>
  );
}
