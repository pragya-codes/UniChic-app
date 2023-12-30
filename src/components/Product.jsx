/* eslint-disable react/prop-types */
import { CartContext } from '../context/cartContext';
import { useContext, useState } from 'react';
import '../styles/Product.css';
function Product({ setWish, wish, item, title, img, price }) {
	const { cart, setCart, setCartCount } = useContext(CartContext);
	const [toggle, setToggle] = useState(true);
	function handleClick() {
		setCart([...cart, item]);
		setCartCount((cartCount) => cartCount + 1);
		setToggle(!toggle);
	}

	function handleWish(item) {
		const index = wish.indexOf(item);
		console.log(index);
		if (index === -1) {
			setWish([...wish, item]); // Add item to wishlist if not already present
		} else {
			const updatedWishlist = [...wish];
			updatedWishlist.splice(index, 1); // Remove item from wishlist if already present
			setWish(updatedWishlist);
		}
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
					<i
						className={
							wish.includes(item)
								? 'fa-solid fa-heart fa-lg'
								: 'fa-regular fa-heart fa-lg'
						}
						onClick={() => handleWish(item)}
					></i>
				</li>
				{toggle ? (
					<button className="btn" onClick={() => handleClick(item)}>
						ADD TO CART
					</button>
				) : (
					<button className="btn">GO TO CART!</button>
				)}
			</ul>
		</>
	);
}

export default Product;
