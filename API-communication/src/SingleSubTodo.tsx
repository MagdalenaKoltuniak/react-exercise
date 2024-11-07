import { useEffect } from 'react';
import { useSubTodoDelete } from './hooks/useSubTodoDelete';
import { SubTodo } from './types';

type SingleSubTodoProps = {
	onDeleteCallback: () => void;
	element: SubTodo;
};

export const SingleSubTodo = ({ element, onDeleteCallback }: SingleSubTodoProps) => {
	const { deleteSubTodo, data } = useSubTodoDelete();

	const onDelete = () => {
		deleteSubTodo(element.id);
	};

	useEffect(() => {
		if (!data) return;

		onDeleteCallback();
	}, [data]);

	return (
		<li>
			<p>{element.title}</p>
			<button onClick={onDelete}>Delete subtodo</button>
		</li>
	);
};
