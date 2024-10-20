import { useEffect, useMemo, useState } from 'react';

type RandomArraySorterProps = {
	direction: 'DESC' | 'ASC';
};

export const RandomArraySorter = ({ direction }: RandomArraySorterProps) => {
	const [randomLength, setRandomLength] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setRandomLength(Math.round(Math.random() * 15) + 5);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const getArr = (dir: 'DESC' | 'ASC', len: number) => {
		const result: number[] = [];

		for (let i = 0; i < len; i++) {
			result.push(Math.round(Math.random() * 100));
		}

		result.sort((a, b) => (dir === 'ASC' ? a - b : b - a));

		return result;
	};

	const elements = useMemo(() => getArr(direction, randomLength), [direction]);

	return (
		<ul>
			{elements.map((el, index) => (
				<li key={index}>{el}</li>
			))}
		</ul>
	);
};
