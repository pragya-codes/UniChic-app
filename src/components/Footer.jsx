import '../styles/Footer.css';
export default function Footer() {
	return (
		<>
			<div className="footer">
				<div className="item1">
					Unichic.
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Accusantium, assumenda saepe nobis nesciunt veniam
						rerum.
					</p>
				</div>
				<ul className="item2">
					<li>Home</li>
					<li>Portfolio</li>
					<li>About Us</li>
					<li>Return Policy</li>
				</ul>
				<ul className="item3">
					<li>Terms & conditions</li>
					<li>Privacy Policy</li>
					<li>Resources</li>
				</ul>
				<button className="item4">Contact Us</button>
				<div className="item5">@UniChic. All Rights Reserved.</div>
			</div>
		</>
	);
}
