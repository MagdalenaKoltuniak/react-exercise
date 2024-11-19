import { useGetSubTodosQuery } from './queries/useGetSubtodosQuery';
import { SingleSubTodo } from './SingleSubTodo';
import { SubTodoForm } from './SubTodoForm';

type SubTodosProps = {
	todoId: string;
};

export const SubTodos = ({ todoId }: SubTodosProps) => {
	const { data, error, isLoading } = useGetSubTodosQuery(todoId);

	if (error) return <p>{error.message}</p>;

	if (isLoading) return <p>Loading subtodos...</p>;

	if (!data) return null;

	return (
		<>
			<SubTodoForm todoId={todoId} />
			<ul>
				{data.map(subtodo => (
					<SingleSubTodo key={subtodo.id} element={subtodo} />
				))}
			</ul>
		</>
	);
};
