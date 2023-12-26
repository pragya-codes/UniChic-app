import { useEffect, useState } from 'react';
import Product from './Product';
import '../styles/Shop.css';

export default function Shop() {
	const [item, setItem] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => setItem(data));
		console.log(item);
		return () => {
			controller.abort();
		};
	}, []);

	return (
		<>
			<ul>
				{item.map((i) => (
					<li key={i.id}>
						<Product title={i.title} img={i.image} />
					</li>
				))}
			</ul>
		</>
	);
}
