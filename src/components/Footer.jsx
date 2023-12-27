import '../styles/Footer.css';
export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="item1" id="item">
					<h2>UniChic.</h2>
					<p>
						UniChic caters to thoughtful shoppers who appreciate
						unique designs and top quality pieces you just can not
						find elsewhere.
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
