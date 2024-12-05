import { useParams } from 'react-router-dom';

export const Content = () => {
	const { lang } = useParams<{ lang?: string }>();

	return <h1>Content [{lang}]</h1>;
};
