import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout1() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout1;
