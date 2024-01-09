import { useEffect, useState } from 'react';
import Product from './Product';
import Spinner from './Spinner';
import '../styles/shop.css';
import { useSearchParams } from 'react-router-dom';

export default function Shop() {
	const [searchParam] = useSearchParams();
	const [filteredItems, setfilteredItems] = useState([]);

	const [item, setItem] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => {
				setItem(data);
				setLoading(false);
			});

		return () => {
			controller.abort();
		};
	}, []);

	useEffect(() => {
		const category = searchParam.get('category');
		const filter = category
			? item.filter((i) => i.category === category)
			: item;
		setfilteredItems(filter);
	}, [searchParam, item]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<ul className="container c-shop">
					{filteredItems.map((i) => (
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
			)}
		</>
	);
}
