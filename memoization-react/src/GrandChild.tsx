import { memo } from 'react';

type GrandChildProps = {
	elements: number[];
};

export const GrandChild = memo(({ elements }: GrandChildProps) => {
	console.log('GrandChild is rendering');

	return (
		<>
			<h3>Hello from GrandChild</h3>
			<p>Array from GrandChild: {elements.join(', ')}</p>
		</>
	);
});
