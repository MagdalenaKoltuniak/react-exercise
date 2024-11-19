import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { SubTodo, SubTodoDto } from '../types';

export const useCreateSubTodoMutation = () => {
	const { apiPost } = useApi();
	const queryClient = useQueryClient();

	const { data, error, isPending, mutate } = useMutation({
		mutationKey: ['subtodos'],
		mutationFn: async (payload: SubTodoDto) => {
			return apiPost<SubTodo, SubTodoDto>(`subtodos`, payload);
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
