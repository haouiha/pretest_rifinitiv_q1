import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import * as utils from './utils';

function App() {
	const [inputNumber, setInputNumber] = useState(0);
	const [checkCondition, setCheckCondition] = useState('isPrime');
	const [result, setResult] = useState(null);
	const selectRef = useRef();

	const handleInputChange = (e) => {
		setInputNumber(e.target.value);
	};

	const roundNumberAndNotNegative = useCallback(() => {
		setInputNumber(inputNumber < 0 ? 1 : Math.round(inputNumber));
	}, [inputNumber]);

	const handleCheckConditionChange = (e) => {
		setCheckCondition(`${e.target.value}`);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			roundNumberAndNotNegative();
			selectRef.current.focus();
		}
	};

	const calulateResult = (number, condition) => {
		// console.log(number, condition, utils[condition](number));
		setResult(utils[condition](number));
	};

	useEffect(() => {
		calulateResult(inputNumber, checkCondition);
	}, [inputNumber, checkCondition]);

	return (
		<AppContainer>
			<Col1>
				<input
					type="number"
					value={inputNumber}
					onChange={handleInputChange}
					onBlur={roundNumberAndNotNegative}
					onKeyDown={handleKeyDown}
				></input>
			</Col1>
			<Col2>
				<select ref={selectRef} value={checkCondition} onChange={handleCheckConditionChange}>
					<option value="isPrime">isPrime</option>
					<option value="isFibonacci">isFibonacci</option>
				</select>
			</Col2>
			<Col3>
				<span>{`${result}`}</span>
			</Col3>
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
`;

const Col1 = styled.div`
	flex: 0 0 200px;
	/* background-color: red; */
`;

const Col2 = styled.div`
	flex: 1 0 100px;
	/* background-color: green; */
`;

const Col3 = styled.div`
	flex: 0 0 300px;
	/* background-color: blue; */
`;
