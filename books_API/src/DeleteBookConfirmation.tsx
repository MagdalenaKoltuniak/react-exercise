import { useDeleteBookMutation } from './queries/useDeleteBookMutation';
import { BookEntity } from './types';

type DeleteBookConfirmationProps = {
	onCancel: () => void;
	book: BookEntity;
};

export const DeleteBookConfirmation = ({ onCancel, book }: DeleteBookConfirmationProps) => {
	const { mutate, isPending } = useDeleteBookMutation(book.id);

	const handleDelete = () => {
		mutate();
	};

	if (isPending) return <p>Loading...</p>;

	return (
		<div>
			<p>Do you really want to delete book {book.title}?</p>
			<button onClick={handleDelete}>Delete</button>
			<button onClick={onCancel}>Cancel</button>
		</div>
	);
};
