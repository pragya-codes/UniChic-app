import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { WishContext } from '../context/wishContext';

function Wishpage() {
	const { wish } = useContext(WishContext);
	return (
		<div className="container c-cart">
			{wish && wish.length > 0 ? (
				<ul className="container" style={{ transform: 'scale(0.7)' }}>
					{wish.map((i) => (
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
			) : (
				<p className="emp-cart">
					Wishlist is Empty! Visit our{' '}
					<Link
						to="/shop"
						style={{
							textDecoration: 'none',
							color: 'var(--pink)',
						}}
					>
						Shop.
					</Link>
				</p>
			)}
		</div>
	);
}

export default Wishpage;
