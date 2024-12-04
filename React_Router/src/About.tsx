import { Link, Outlet } from 'react-router-dom';

export const About = () => (
	<div>
		<h1>About</h1>
		<ul>
			<li>
				<Link to='.'>About us</Link>
			</li>
			<li>
				<Link to='company'>About company</Link>
			</li>
		</ul>
		<Outlet />
	</div>
);
