import '../styles/Navbar.css';

function Navbar() {
	return (
		<>
			<div className="navbar">
				<div className="container">
					<div className="logo">
						UniChic<span>.</span>
					</div>
					<ul className="menu">
						<li>Home</li>
						<li>Shop</li>
						<li>About</li>
						<li>Contact</li>
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
