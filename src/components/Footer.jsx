import '../styles/Footer.css';
export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div id="item1" className="item">
					<h2>UniChic.</h2>
					<p>
						UniChic caters to thoughtful shoppers who appreciate
						unique designs and top quality pieces you just can not
						find elsewhere.
					</p>
				</div>
				<ul id="item2" className="item">
					<li>Home</li>
					<li>Portfolio</li>
					<li>About Us</li>
					<li>Return Policy</li>
				</ul>
				<ul id="item3" className="item">
					<li>Terms & conditions</li>
					<li>Privacy Policy</li>
					<li>Resources</li>
				</ul>
				<div id="item4" className="item">
					<button>Contact Us</button>
				</div>
				<div id="item5" className="item">
					@UniChic. All Rights Reserved.
				</div>
			</footer>
		</>
	);
}
