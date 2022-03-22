import styled from "styled-components";

// interface => object가 어떤식으로 보일 지 설명
interface ContainerProps {
  bgColor: string;
  borderColor: string; // css에서는 필수(required)이기 때문
}

const Container = styled.div<ContainerProps>`
width: 200px;
height: 200px;
background-color: ${props => props.bgColor};
border-radius: 100px;
border: 1px solid ${props => props.borderColor};
text-align: center;
`;

interface CircleProps {
  bgColor: string; // required
  borderColor?: string; // optional (= borderColor: string | undefined)
  text?:string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  // borderColor 초기값 설정 (여기서는 yellow가 borderColor의 초기값이 되는거임) 
  return <Container bgColor={bgColor} borderColor={borderColor ?? "yellow"} > 
    {text}
  </Container>
}

export default Circle;
