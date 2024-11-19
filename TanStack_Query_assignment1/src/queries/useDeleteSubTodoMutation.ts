import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { SubTodo } from '../types';

export const useDeleteSubTodoMutation = () => {
	const { apiDelete } = useApi();
	const queryClient = useQueryClient();

	const { data, error, isPending, mutate } = useMutation({
		mutationKey: ['subtodos'],
		mutationFn: async (subTodoId: string) => {
			return apiDelete<SubTodo>(`subtodos/${subTodoId}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['subtodos'],
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
