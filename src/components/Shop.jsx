import { useEffect, useState } from 'react';
import Product from './Product';
import '../styles/Shop.css';
import CartContextProvider from '../context/cartContext';

export default function Shop() {
	const [item, setItem] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => setItem(data));

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<>
			<CartContextProvider>
				<ul>
					{item.map((i) => (
						<li key={i.id}>
							<Product
								item={i}
								title={i.title}
								img={i.image}
								price={i.price}
							/>
						</li>
					))}
				</ul>
			</CartContextProvider>
		</>
	);
}
