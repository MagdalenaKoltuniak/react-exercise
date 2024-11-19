import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TodoApp } from './TodoApp';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<TodoApp />
		</QueryClientProvider>
	);
};

export { App };
