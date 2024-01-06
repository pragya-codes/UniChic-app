import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import '../styles/Navbar.css';
import { WishContext } from '../context/wishContext';
function Navbar() {
	const { cartCount } = useContext(CartContext);
	const { wishCount } = useContext(WishContext);
	return (
		<div className="navbar">
			<div className="container c-nav">
				<div className="logo">
					<Link to="/" style={{ all: 'inherit', cursor: 'pointer' }}>
						UniChic<span>.</span>
					</Link>
				</div>

				<ul className="menu">
					<li>
						<Link to="/" className="link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/shop" className="link">
							Shop
						</Link>
					</li>
					<li>
						<Link to="/about" className="link">
							About
						</Link>
					</li>
					<li>
						<Link to="/contact" className="link">
							Contact
						</Link>
					</li>
				</ul>

				<ul className="side">
					{/* <li>Login/Register</li> */}
					<li>
						<Link to="/cart" className="link">
							<i className=" fa-solid fa-cart-shopping fa-lg">
								{cartCount}
							</i>
						</Link>
					</li>
					<i className="fa-solid fa-heart fa-lg">{wishCount}</i>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
