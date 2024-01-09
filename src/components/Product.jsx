/* eslint-disable react/prop-types */
import { CartContext } from '../context/cartContext';
import { useContext, useState } from 'react';
import '../styles/product.css';
import { Link } from 'react-router-dom';
import Wish from './Wish';
function Product({ item, title, img, price }) {
	const { cart, setCart, setCartCount } = useContext(CartContext);
	const [toggle, setToggle] = useState(true);
	function handleClick() {
		setCart([...cart, item]);
		setCartCount((cartCount) => cartCount + 1);
		setToggle(!toggle);
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
				<li className="price">
					<div>$ {price}</div>
					<Wish item={item} />
					{/* Like component seperated above*/}
				</li>
				{toggle ? (
					<button className="btn" onClick={() => handleClick(item)}>
						ADD TO CART
					</button>
				) : (
					<button className="btn">
						<Link to="/cart" className="btn-link">
							GO TO CART!
						</Link>
					</button>
				)}
			</ul>
		</>
	);
}

export default Product;
