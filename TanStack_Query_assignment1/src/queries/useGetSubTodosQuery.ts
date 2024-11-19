import { useQuery } from '@tanstack/react-query';
import { TodoWithSubTodos } from '../types';
import { useApi } from '../hooks/useApi';

export const useGetSubTodosQuery = (todoId: string) => {
	const { apiGet } = useApi();

	const { data, error, isLoading } = useQuery({
		queryKey: ['subtodos', todoId],
		queryFn: async () => {
			return apiGet<TodoWithSubTodos>(`todos/${todoId}?_embed=subtodos`);
		},
	});

	return {
		data: data ? data.subtodos : undefined,
		error,
		isLoading,
	};
};
