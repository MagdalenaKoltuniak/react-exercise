import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { BookEntity } from '../types';

export const useDeleteBookMutation = (bookId: string) => {
	const { apiDelete } = useApi();
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['books', 'delete', bookId],
		mutationFn: async () => {
			return await apiDelete<BookEntity>(`books/${bookId}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['books'],
			});
		},
	});

	return { mutate, isPending };
};
