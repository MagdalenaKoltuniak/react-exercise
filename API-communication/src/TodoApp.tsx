import { useTodos } from './hooks/useTodos';
import { SingleTodo } from './SingleTodo';
import { TodoForm } from './TodoForm';

export const TodoApp = () => {
	const { data, error, loading, removeTodo, addTodo } = useTodos();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div>
			<TodoForm onNewTodo={addTodo} />
			<ul>
				{data?.map(element => (
					<SingleTodo key={element.id} onTodoRemove={removeTodo} element={element} />
				))}
			</ul>
		</div>
	);
};
