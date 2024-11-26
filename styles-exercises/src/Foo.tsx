import styled from 'styled-components';
import { shadow } from './helpers';

const Element = styled.div<{ color: string }>`
	width: 200px;
	height: 200px;
	padding: 30px;
	border-radius: 10px;
	background: #eee;
	color: #111;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	${shadow}
`;

export const Foo = () => {
	return (
		<Element color='blue'>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse magnam minus eos perspiciatis voluptatibus rerum
			corporis obcaecati fuga quo velit odit, aliquam, fugit totam aperiam commodi dolorum incidunt, tempore deleniti!
		</Element>
	);
};
