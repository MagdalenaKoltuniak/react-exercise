import { useDeleteSubTodoMutation } from './queries/useDeleteSubTodoMutation';
import { SubTodo } from './types';

type SingleSubTodoProps = {
	element: SubTodo;
};

export const SingleSubTodo = ({ element }: SingleSubTodoProps) => {
	const { mutate: deleteSubTodo } = useDeleteSubTodoMutation();

	const onDelete = () => {
		deleteSubTodo(element.id);
	};

	return (
		<li>
			<p>{element.title}</p>
			<button onClick={onDelete}>Delete subtodo</button>
		</li>
	);
};
