import { useEffect } from 'react';
import { useTodoDelete } from './hooks/useTodoDelete';
import { Todo } from './types';

type SingleTodoProps = {
	onTodoRemove: (id: string) => void;
	element: Todo;
};

export const SingleTodo = ({ element, onTodoRemove }: SingleTodoProps) => {
	const { loading, error, deleteTodo, data } = useTodoDelete();

	const onDelete = () => {
		deleteTodo(element.id);
	};

	useEffect(() => {
		if (!data) return;

		onTodoRemove(data.id);
	});

	return (
		<li>
			<p>{element.title}</p>
			<button disabled={loading} onClick={onDelete}>
				Delete
			</button>
			{error && <p>{error}</p>}
		</li>
	);
};
