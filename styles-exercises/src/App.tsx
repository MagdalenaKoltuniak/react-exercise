import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Button } from './Button';
import { Text } from './Text';
import { Wrapper } from './Wrapper';
import { useState } from 'react';
// import { Bar } from './Bar';
// import { Foo } from './Foo';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
  }
`;

export const App = () => {
	const [isLight, setIsLight] = useState(true);
	// exercise 1
	const light = {
		colors: {
			primary: '#0333EE',
			textPrimary: '#fff',
			background: '#eee',
			textBackground: '#333',
		},
	};

	const dark = {
		colors: {
			primary: '#9ca5df',
			textPrimary: '#222',
			background: '#333',
			textBackground: '#eee',
		},
	};

	const toggleTheme = () => {
		setIsLight(prevIsLight => !prevIsLight);
	};

	return (
		<ThemeProvider theme={isLight ? dark : light}>
			<GlobalStyle />
			<Wrapper>
				<Button label='Toggle theme' onClick={toggleTheme} />
				<Text>Dolor sit amet</Text>
			</Wrapper>
		</ThemeProvider>
	);
};

// exercise 2
// 	return (
// 		<>
// 			<Foo />
// 			<Bar />
// 		</>
// 	);
// };

// export { App };
