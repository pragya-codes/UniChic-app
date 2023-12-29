/* eslint-disable react/prop-types */
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import '../styles/Product.css';
function Product({ item, title, img, price }) {
	const { cart, setCart, setCartCount } = useContext(CartContext);

	function handleClick() {
		setCart([...cart, item]);
		setCartCount((cartCount) => cartCount + 1);
	}

	return (
		<>
			<ul className="product">
				<li>
					<img src={img} alt="img"></img>
				</li>
				<li className="title">{title}</li>
				{/* <li className="desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Inventore, voluptates!
				</li> */}
				<li className="price">$ {price}</li>
				<li>
					<button className="btn" onClick={handleClick}>
						ADD TO CART
					</button>
				</li>
			</ul>
		</>
	);
}

export default Product;
