import styled, { keyframes } from "styled-components";
import "./App.css";
import Circle from "./Circle";

function App() {
	return (
		<div>
			<Circle borderColor="tomato" bgColor="teal" />
			<Circle bgColor="pink" text="hi im props" />
    </div>
	);
}

export default App;
