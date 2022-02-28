import styled, { keyframes } from "styled-components";
import "./App.css";


const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 50% {
    border-radius: 100px;
  } 100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 2s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  &:hover {
    color: teal;
  }
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
	return (
		<Wrapper>
      <Title>Hello</Title>
		</Wrapper>
	);
}

export default App;
