import { useLocation } from 'react-router-dom';

export const FooBar = () => {
	const location = useLocation();

	console.log('LOCATION', location);

	return <h1>FooBar</h1>;
};
