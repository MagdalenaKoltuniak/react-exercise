import styled from 'styled-components';

type ButtonProps = {
	label: string;
};

const StyledButton = styled.button`
    border: none;
    padding: 20px;
    min-width: 200px;
	background-color: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.textPrimary};
`;

export const Button = ({ label }: ButtonProps) => {
	return <StyledButton>{label}</StyledButton>;
};
