import { useEffect, useState } from 'react';
import { useTodoDelete } from './hooks/useTodoDelete';
import { Todo } from './types';
import { SubTodos } from './SubTodos';

type SingleTodoProps = {
	onTodoRemove: (id: string) => void;
	element: Todo;
};

export const SingleTodo = ({ element, onTodoRemove }: SingleTodoProps) => {
	const { loading, error, deleteTodo, data } = useTodoDelete();
	const [showTodos, setShowTodos] = useState(false);

	const onDelete = () => {
		deleteTodo(element.id);
	};

	const toggleSubTodos = () => {
		setShowTodos(prevShowTodos => !prevShowTodos);
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
			<button disabled={loading} onClick={toggleSubTodos}>
				Show details
			</button>
			{showTodos && <SubTodos todoId={element.id} />}
			{error && <p>{error}</p>}
		</li>
	);
};
