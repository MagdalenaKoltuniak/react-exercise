import { useParams } from 'react-router-dom';

export const DynamicProduct = () => {
	const { productId, additionalParam } = useParams<{ productId: string; additionalParam?: string }>();

	return (
		<h1>
			Product {productId} {additionalParam ? `- ${additionalParam}` : null}
		</h1>
	);
};
