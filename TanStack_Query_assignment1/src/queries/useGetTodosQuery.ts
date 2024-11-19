import { useQuery } from '@tanstack/react-query';
import { Todo } from '../types';
import { useApi } from '../hooks/useApi';

export const useGetTodosQuery = () => {
	const { apiGet } = useApi();

	const { data, error, isLoading } = useQuery({
		queryKey: ['todos'],
		queryFn: async () => {
			return apiGet<Todo[]>('todos');
		},
	});

	return {
		data,
		error,
		isLoading,
	};
};
