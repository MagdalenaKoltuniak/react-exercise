import { useQuery } from '@tanstack/react-query';
import { BookEntity } from '../types';
import { useApi } from '../hooks/useApi';

export const useGetBooksQuery = () => {
	const { apiGet } = useApi();

	const { data, isFetching } = useQuery({
		queryKey: ['books'],
		queryFn: async () => {
			return apiGet<BookEntity[]>('books');
		},
	});

	return { data, isFetching };
};
