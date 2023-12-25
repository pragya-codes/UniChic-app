import '../styles/Footer.css';
export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="item1" id="item">
					<h2>UniChic.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Accusantium, assumenda saepe nobis nesciunt veniam
						rerum.
					</p>
				</div>
				<ul className="item2" id="item">
					<li>Home</li>
					<li>Portfolio</li>
					<li>About Us</li>
					<li>Return Policy</li>
				</ul>
				<ul className="item3" id="item">
					<li>Terms & conditions</li>
					<li>Privacy Policy</li>
					<li>Resources</li>
				</ul>
				<div className="item4" id="item">
					<button>Contact Us</button>
				</div>
				<div className="item5" id="item">
					@UniChic. All Rights Reserved.
				</div>
			</footer>
		</>
	);
}
