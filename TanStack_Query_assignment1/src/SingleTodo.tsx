import { useState } from 'react';
import { Todo } from './types';
import { SubTodos } from './SubTodos';
import { useDeleteTodoMutation } from './queries/useDeleteTodoMutation';

type SingleTodoProps = {
	element: Todo;
};

export const SingleTodo = ({ element }: SingleTodoProps) => {
	const { isPending, error, mutate: deleteTodo } = useDeleteTodoMutation();
	const [showTodos, setShowTodos] = useState(false);

	const onDelete = () => {
		deleteTodo(element.id);
	};

	const toggleSubTodos = () => {
		setShowTodos(prevShowTodos => !prevShowTodos);
	};

	return (
		<li>
			<p>{element.title}</p>
			<button disabled={isPending} onClick={onDelete}>
				Delete
			</button>
			<button disabled={isPending} onClick={toggleSubTodos}>
				Show details
			</button>
			{showTodos && <SubTodos todoId={element.id} />}
			{error && <p>{error.message}</p>}
		</li>
	);
};
