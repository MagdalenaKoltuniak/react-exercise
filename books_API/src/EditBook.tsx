import { ChangeEvent, FormEvent, useState } from 'react';
import { BookEntity } from './types';
import { BookForm } from './BookForm';
import { useUpdateBookMutation } from './queries/useUpdateBookMutation';

type EditBookProps = {
	book: BookEntity;
};

export const EditBook = ({ book }: EditBookProps) => {
	const { mutate, isPending } = useUpdateBookMutation(book.id);

	const [values, setValues] = useState({
		title: book.title,
		year: book.year,
		description: book.description,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type } = e.target;

		setValues(prevValues => ({
			...prevValues,
			[name]: type === 'number' ? Number(value) : value,
		}));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		mutate({
			title: values.title,
			description: values.description,
			year: values.year,
		});
	};
	return <BookForm handleSubmit={handleSubmit} handleChange={handleChange} isPending={isPending} values={values} />;
};
