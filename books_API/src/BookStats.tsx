import { useGetBooksQuery } from './queries/useGetBooksQuery';

export const BookStats = () => {
	const { data, isFetching } = useGetBooksQuery();

	if (isFetching) return <p>Loading book stats...</p>;

	return (
		<div>
			Books count: <strong>{data?.length || 'No data'}</strong>
		</div>
	);
};
