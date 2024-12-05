import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export const ProtectedRoute = () => {
	const userData = useUser();

	if (!userData) return <Navigate to='/' />;

	return (
		<div>
			<Outlet />
		</div>
	);
};
