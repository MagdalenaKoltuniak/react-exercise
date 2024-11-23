import { useState } from 'react';
import { EditBook } from './EditBook';
import { BookEntity } from './types';

type SingleBookProps = {
	book: BookEntity;
};

export const SingleBook = ({ book }: SingleBookProps) => {
	const [isEditing, setIsEditing] = useState(false);

	const toggleEditMode = () => {
		setIsEditing(prevIsEditing => !prevIsEditing);
	};

	return (
		<li>
			<h2>
				<strong>Title: {book.title}</strong> (year: {book.year})
			</h2>
			<p>Description: {book.description}</p>
			<button onClick={toggleEditMode}>{isEditing ? 'Cancel' : 'Edit'}</button>
			{isEditing ? <EditBook book={book} /> : undefined}
		</li>
	);
};
