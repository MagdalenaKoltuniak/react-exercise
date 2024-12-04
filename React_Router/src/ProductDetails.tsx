import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const ProductDetails = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('..', {
				relative: 'path',
			});
		}, 2000);
	}, []);

	// const disable = true;

	// if (disable) return <Navigate relative='path' to='..' />;

	return (
		<div>
			<h1>Product: ID 12383474</h1>
			<Link relative='path' to={'..'}>
				Go back to product overview
			</Link>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellat neque. Praesentium itaque unde, quas
				dignissimos ad nemo voluptatum nesciunt expedita quod molestias quibusdam possimus, perferendis ullam vitae
				quae! Ipsam!
			</p>
		</div>
	);
};
