import { useTopTodos } from './hooks/useTopTodos';

export const TopTodos = () => {
	const { topTodos } = useTopTodos();

	return (
		<div>
			<h2>Top 5 Todos</h2>
			<ul>
				{topTodos.map(todo => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};
