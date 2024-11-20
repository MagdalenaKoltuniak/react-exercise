import { BookEntity } from './types';

type SingleBookProps = {
	book: BookEntity;
};

export const SingleBook = ({ book }: SingleBookProps) => {
	return (
		<li>
			<h2>
				<strong>Title: {book.title}</strong> (year: {book.year})
			</h2>
			<p>Description: {book.description}</p>
		</li>
	);
};
