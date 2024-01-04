import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout1 from './components/Layout1';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import About from './components/About';
// import Product from './components/Product';
import Shop from './components/Shop';
import Home from './components/Home';
import './styles/App.css';
import Cart from './components/Cart';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout1 />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/shop', element: <Shop /> },
			{ path: '/about', element: <About /> },
			// { path: '/contact', element: <Shop /> },
			{ path: '/cart', element: <Cart /> },
		],
	},
]);
function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
