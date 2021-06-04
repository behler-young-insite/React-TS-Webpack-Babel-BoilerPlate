import './TestComponent.css';

const TestComponent = () => {
	const numberArray1 = [0, 1, 2, 3, 4, 5, 6];
	const numberArray2 = numberArray1.map((num) => num * 2);
	console.log(numberArray1);
	console.log(numberArray2);

	return (
		<div>
			<h1>Test Component</h1>
			<h4>
				This is using the es6 method map()
				<br />I am mapping numberArray1: {numberArray1.toString()} into
				numberArray2: {numberArray2.toString()}, which is a copy of
				numberArray1 where every value is doubled
			</h4>
		</div>
	);
};

export default TestComponent;
