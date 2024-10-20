import { useEffect, useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);

	useEffect(() => {
		const interval1 = setInterval(() => {
			setCounter(prevCounter => prevCounter + 1);
		}, 1000);

		const interval2 = setInterval(() => {
			setCounter2(prevCounter => prevCounter + 1);
		}, 5000);

		return () => {
			clearInterval(interval1);
			clearInterval(interval2);
		};
	}, []);

	console.log('Parent is rendering');

	return (
		<>
			<h1>
				Counter1: {counter} Counter2: {counter2}
			</h1>
			<Child counter1={counter} counter2={counter2} />
		</>
	);
};
