import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Todo } from '../types';

export const useDeleteTodoMutation = () => {
	const { apiDelete } = useApi();
	const queryClient = useQueryClient();

	const { data, error, isPending, mutate } = useMutation({
		mutationKey: ['todos'],
		mutationFn: async (todoId: string) => {
			return apiDelete<Todo>(`todos/${todoId}`);
		},
		onSuccess: (deletedTodo: Todo) => {
			queryClient.setQueryData<Todo[]>(['todos'], oldTodos => {
				return oldTodos?.filter(todo => todo.id !== deletedTodo.id);
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
