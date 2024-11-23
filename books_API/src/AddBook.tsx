import { ChangeEvent, FormEvent, useState } from 'react';
import { useCreateBooksQuery } from './queries/useCreateBookMutation';
import { BookForm } from './BookForm';

export const AddBook = () => {
	const { mutate, isPending } = useCreateBooksQuery();

	const [values, setValues] = useState({
		title: '',
		year: 2024,
		description: '',
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

		setValues({
			title: '',
			year: 2024,
			description: '',
		});
	};
	return <BookForm handleSubmit={handleSubmit} handleChange={handleChange} isPending={isPending} values={values} />;
};
