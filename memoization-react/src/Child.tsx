import { memo, useMemo } from 'react';
import { GrandChild } from './GrandChild';

type ChildProps = {
	counter1: number;
	counter2: number;
};

export const Child = memo(({ counter2 }: ChildProps) => {
	console.log('Child is rendering');

	const generateArray = (howMany: number) => {
		const array: number[] = [];

		for (let i = 0; i < howMany; i++) {
			array.push(Math.round(Math.random() * 1000));
		}

		return array;
	};

	const elements = useMemo(() => generateArray(counter2), [counter2]);

	return (
		<>
			<h2>Hello from Child</h2>
			{/* <p>counter: {counter1}</p> */}
			<GrandChild elements={elements} />
		</>
	);
});
