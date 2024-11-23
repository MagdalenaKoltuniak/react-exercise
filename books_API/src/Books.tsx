// import { useEffect } from 'react';
// import { Book } from './types';
// import { useApi } from './hooks/useApi';
import { AddBook } from './AddBook';
import { useGetBooksQuery } from './queries/useGetBooksQuery';
import { SingleBook } from './SingleBook';

export const Books = () => {
	const { data, isFetching } = useGetBooksQuery();

	if (!data) return <p>No data...</p>;

	if (isFetching) return <p>Loading...</p>;
	// if (error) return <p>{error.message}</p>;

	return (
		<div>
			<h1>Books</h1>
			<AddBook />
			<ul>
				{data?.map(book => (
					<SingleBook book={book} key={book.id} />
				))}
			</ul>
		</div>
	);
};
