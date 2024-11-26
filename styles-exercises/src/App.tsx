import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Button } from './Button';
import { Text } from './Text';
import { Wrapper } from './Wrapper';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
  }
`;

const App = () => {
	const light = {
		colors: {
			primary: '#0333EE',
			textPrimary: '#fff',
			background: '#eee',
			textBackground: '#333',
		},
	};
	return (
		<ThemeProvider theme={light}>
			<GlobalStyle />
			<Wrapper>
				<Button label='Lorem ipsum' />
				<Text>Dolor sit amet</Text>
			</Wrapper>
		</ThemeProvider>
	);
};

export { App };
