// import { useEffect } from 'react';
// import { Book } from './types';
// import { useApi } from './hooks/useApi';
import { useGetBooksQuery } from './queries/useGetBooksQuery';
import { SingleBook } from './SingleBook';

export const Books = () => {
	const { data, error, isPending } = useGetBooksQuery();

	if (!data) return <p>Loading...</p>;
	if (isPending) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<div>
			<h1>Books</h1>
			<ul>
				{data?.map(book => (
					<SingleBook book={book} key={book.id} />
				))}
			</ul>
		</div>
	);
};
