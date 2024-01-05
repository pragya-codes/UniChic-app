import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Product from './Product';

function Cart() {
	const { cart } = useContext(CartContext);
	console.log(cart);
	return (
		<ul>
			{cart.map((i) => (
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
	);
}

export default Cart;
