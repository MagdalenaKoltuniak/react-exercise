import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Parent = styled.div`
	border: 1px solid red;
	background-color: #eee;
	position: relative;
	width: 600px;
	height: 600px;
`;

const Child = styled.div<{ x: number; y: number; color: string }>`
	position: absolute;
	width: 50px;
	height: 50px;
	background: ${props => props.color};
	left: ${props => props.x}px;
	top: ${props => props.y}px;
`;

const getRandomColor = () => {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const Bouncy = () => {
	const [x, setX] = useState(Math.round(Math.random() * 600));
	const [y, setY] = useState(Math.round(Math.random() * 600));

	const xMultiplier = useRef(1);
	const yMultiplier = useRef(1);
	const color = useRef(getRandomColor());

	if (x > 575) {
		xMultiplier.current = -1;
		color.current = getRandomColor();
	}
	if (x < -25) {
		xMultiplier.current = 1;
		color.current = getRandomColor();
	}
	if (y > 575) {
		yMultiplier.current = -1;
		color.current = getRandomColor();
	}
	if (y < -25) {
		yMultiplier.current = 1;
		color.current = getRandomColor();
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setX(prevX => prevX + 10 * xMultiplier.current);
			setY(prevY => prevY + 10 * yMultiplier.current);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<Parent>
			<Child x={x} y={y} color={color.current} />
		</Parent>
	);
};
