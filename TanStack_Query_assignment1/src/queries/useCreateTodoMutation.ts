import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Todo, TodoDto } from '../types';

export const useCreateTodoMutation = () => {
	const { apiPost } = useApi();
	const queryClient = useQueryClient();

	const { data, error, isPending, mutate } = useMutation({
		mutationKey: ['todos'],
		mutationFn: async (title: string) => {
			return apiPost<Todo, TodoDto>(`todos`, { title });
		},
		onSuccess: createdTodo => {
			queryClient.setQueryData<Todo[]>(['todos'], oldTodos => {
				return [...(oldTodos || []), createdTodo];
			});
		},
	});

	return {
		data,
		error,
		isPending,
		mutate,
	};
};
