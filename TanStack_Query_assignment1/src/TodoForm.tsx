import { FormEvent, useState } from 'react';
import { useCreateTodoMutation } from './queries/useCreateTodoMutation';

export const TodoForm = () => {
	const { mutate: createTodo, error, isPending } = useCreateTodoMutation();
	const [value, setValue] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		createTodo(value);
		setValue('');
	};

	if (isPending) return <p>Loading...</p>;

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='title'>Title</label>
			<input type='text' id='title' name='title' value={value} onChange={e => setValue(e.target.value)} />
			{error && <p>{error.message}</p>}
		</form>
	);
};
