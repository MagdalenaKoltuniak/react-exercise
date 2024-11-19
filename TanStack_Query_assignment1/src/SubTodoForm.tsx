import { FormEvent, useState } from 'react';
import { useCreateSubTodoMutation } from './queries/useCreateSubTodoMutation';

type SubTodoFormProps = {
	todoId: string;
};

export const SubTodoForm = ({ todoId }: SubTodoFormProps) => {
	const { mutate: createSubTodo, error, isPending } = useCreateSubTodoMutation();
	const [value, setValue] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		createSubTodo({ title: value, todoId });
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
