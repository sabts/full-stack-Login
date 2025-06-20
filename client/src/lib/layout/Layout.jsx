import { Outlet } from 'react-router';
import Menu from '../../components/menu/Menu';

const Layout = () => {
	return (
		<section>
			<Menu />
			<Outlet />
		</section>
	);
};

export default Layout;
