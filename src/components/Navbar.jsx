import '../styles/Navbar.css';

function Navbar() {
	return (
		<>
			<div className="navbar">
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
					<li>Cart</li>
					<li>Like</li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;
