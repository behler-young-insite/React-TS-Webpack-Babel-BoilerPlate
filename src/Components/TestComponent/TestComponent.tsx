import './TestComponent.css';

const TestComponent = () => {
	const numberArray1 = [0, 1, 2, 3, 4, 5, 6];
	const numberArray2 = numberArray1.map((num) => num * 2);
	console.log(numberArray1);
	console.log(numberArray2);

	return (
		<div>
			<h1>Test Component</h1>
			<h4>{numberArray2.toString()}</h4>
		</div>
	);
};

export default TestComponent;
