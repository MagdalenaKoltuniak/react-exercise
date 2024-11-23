import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { BookDto, BookEntity } from '../types';

export const useUpdateBookMutation = (bookId: string) => {
	const { apiPut } = useApi();
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['books', 'update', bookId],
		mutationFn: async (payload: BookDto) => {
			return await apiPut<BookEntity, BookDto>(`books/${bookId}`, payload);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['books']
			})
		},
	});

	return { mutate, isPending };
};
