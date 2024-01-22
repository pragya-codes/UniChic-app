import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import Wish from './Wish';
import '../styles/cart.css';

function Cart() {
	const { cart, setCart, setCartCount } = useContext(CartContext);
	function handleClick(id) {
		const filtercart = cart.filter((item) => item.id !== id);
		setCart(filtercart);
		setCartCount((c) => c - 1);
	}
	console.log(cart);
	return (
		<div className="container c-cart">
			{cart && cart.length > 0 ? (
				<ul className="cart">
					{cart.map((i) => (
						<li className="cart-li" key={i.id}>
							<img src={i.image} alt="cart product image" />
							<div>
								<p>{i.title}</p>
								<p>${i.price}</p>
							</div>
							<div>
								<Wish item={i} />
								<p
									style={{
										cursor: 'pointer',
										marginTop: '1rem',
									}}
									onClick={() => handleClick(i.id)}
								>
									✖
								</p>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p className="emp-cart">
					Cart is Empty! Buy from our{' '}
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

export default Cart;
