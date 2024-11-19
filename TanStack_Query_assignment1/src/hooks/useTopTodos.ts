import { useGetTodosQuery } from '../queries/useGetTodosQuery';

export const useTopTodos = () => {
	const { data } = useGetTodosQuery();

	return {
		topTodos: data ? data.slice(0, 5) : [],
	};
};
