import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/cartContext';
import Layout1 from './components/Layout1';

import About from './components/About';
import Wishpage from './components/Wishpage';
import Shop from './components/Shop';
import Home from './components/Home';
import Contact from './components/Contact';
import './styles/app.css';
import Cart from './components/Cart';
import WishContextProvider from './context/wishContext';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout1 />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/shop', element: <Shop /> },
			{ path: '/about', element: <About /> },
			{ path: '/contact', element: <Contact /> },
			{ path: '/cart', element: <Cart /> },
			{ path: '/wishpage', element: <Wishpage /> },
		],
	},
]);
function App() {
	return (
		<CartContextProvider>
			<WishContextProvider>
				<RouterProvider router={router}></RouterProvider>
			</WishContextProvider>
		</CartContextProvider>
	);
}

export default App;
