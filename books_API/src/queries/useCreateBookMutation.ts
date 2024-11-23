import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { BookDto, BookEntity } from '../types';

export const useCreateBooksQuery = () => {
	const { apiPost } = useApi();
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['books', 'create'],
		mutationFn: async (payload: BookDto) => {
			return await apiPost<BookEntity, BookDto>('books', payload);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['books'],
			});
		},
	});

	return { mutate, isPending };
};
