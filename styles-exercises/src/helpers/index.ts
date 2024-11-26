import { css } from 'styled-components';

export const shadow = css<{ color: string }>`
	&:hover {
		box-shadow: 0 0 50px -10px ${props => props.color};
	}
`;
