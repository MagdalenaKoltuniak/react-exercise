import { User, useUser } from './hooks/useUser';

export const Dashboard = () => {
	const data = useUser() as User;

	return (
		<div>
			<h1>Hello! You are authenticated user I guess?</h1>
			<p>
				You are {data.name} with ID [{data.id}].
			</p>
		</div>
	);
};
