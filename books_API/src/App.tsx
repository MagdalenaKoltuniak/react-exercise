import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Books } from './Books';
import { BookStats } from './BookStats';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BookStats />
			<Books />
		</QueryClientProvider>
	);
};

export { App };
