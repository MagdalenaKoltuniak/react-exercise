import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Payment = () => {
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();

	const status = searchParams.get('paymentStatus');
	const id = searchParams.get('paymentId');

	console.log('LOCATION', location);
	console.log('SEARCH PARAMS GET ALL', searchParams.getAll('paymentId'));
	console.log('SEARCH PARAMS GET', searchParams.get('paymentId'));
	console.log('SEARCH PARAMS', [...searchParams.entries()]);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setSearchParams({
	// 			loremIpsum: 'dolor sit amet',
	// 		});
	// 	}, 2000);
	// }, []);

	return (
		<div>
			<h1>Payment [{id}]</h1>
			<h2>Status [{status}]</h2>
		</div>
	);
};
