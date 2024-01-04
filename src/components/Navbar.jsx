import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
function Navbar() {
	return (
		<>
			<div className="navbar">
				<div className="container">
					<div className="logo">
						<Link
							to="/"
							style={{ all: 'inherit', cursor: 'pointer' }}
						>
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
						<li>Login/Register</li>
						<li>
							<i className=" fa-solid fa-cart-shopping fa-lg"></i>
						</li>
						<i className="fa-solid fa-heart fa-lg"></i>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;
