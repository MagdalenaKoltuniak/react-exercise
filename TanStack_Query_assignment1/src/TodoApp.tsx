import { useGetTodosQuery } from './queries/useGetTodosQuery';
import { SingleTodo } from './SingleTodo';
import { TodoForm } from './TodoForm';
import { TopTodos } from './TopTodos';

export const TodoApp = () => {
	const { data, isLoading, error } = useGetTodosQuery();

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<div>
			<TopTodos />
			<TopTodos />
			<TopTodos />
			<TopTodos />
			<TodoForm />
			<ul>
				{data?.map(element => (
					<SingleTodo key={element.id} element={element} />
				))}
			</ul>
		</div>
	);
};
