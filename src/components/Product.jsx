/* eslint-disable react/prop-types */
import { CartContext } from '../context/cartContext';
import { useContext, useEffect } from 'react';
import '../styles/Product.css';
function Product({ setWish, wish, item, title, img, price }) {
	const { cart, setCart, setCartCount } = useContext(CartContext);

	function handleClick() {
		setCart([...cart, item]);
		setCartCount((cartCount) => cartCount + 1);
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
