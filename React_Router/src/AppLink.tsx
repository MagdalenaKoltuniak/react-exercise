import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type AppLinkProps = {
	to: string;
	children: ReactNode;
};

export const AppLink = ({ to, children }: AppLinkProps) => {
	return (
		<NavLink
			end
			to={to}
			style={({ isActive }) => ({
				fontWeight: isActive ? '700' : '300',
			})}>
			{children}
		</NavLink>
	);
};
