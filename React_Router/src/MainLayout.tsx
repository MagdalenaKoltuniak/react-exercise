import { Outlet } from 'react-router-dom';
import { AppLink } from './AppLink';

export const MainLayout = () => {
	return (
		<main>
			<header>
				<nav>
					<ul>
						<li>
							<AppLink to='.'>Home</AppLink>
						</li>
						<li>
							<AppLink to='about'>About</AppLink>
						</li>
						<li>
							<AppLink to='product'>Product</AppLink>
						</li>
						<li>
							<AppLink to='product/details'>Product details</AppLink>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</main>
	);
};
