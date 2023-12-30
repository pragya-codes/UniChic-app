import { useEffect, useState } from 'react';
import Product from './Product';
import '../styles/Shop.css';
import CartContextProvider from '../context/cartContext';

export default function Shop() {
	const [item, setItem] = useState([]);
	const [wish, setWish] = useState([]);
	useEffect(() => {
		const controller = new AbortController();
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => setItem(data));

		return () => {
			controller.abort();
		};
	}, []);

	//to see on console as and when wish state gets changed
	// useEffect(() => {
	// 	console.log(wish);
	// }, [wish]);

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
								wish={wish}
								setWish={setWish}
							/>
						</li>
					))}
				</ul>
			</CartContextProvider>
		</>
	);
}
