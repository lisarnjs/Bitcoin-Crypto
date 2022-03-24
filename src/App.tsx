import React, { useState } from "react";

function App() {
	const [value, setValue] = useState("");
	// 어떤 종류의 element가 이 onChange 이벤트를 발생시킬지 특정할 수 있다.ex)<HTMLInputElement>
	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: {value},
		} = event;
		setValue(value);
	}
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Hello", value);
	}
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input 
				value={value} 
				onChange={onChange} 
				type="text" 
				placeholder="username" />
				<button>Log in</button>
			</form>
    </div>
	);
}

export default App;



