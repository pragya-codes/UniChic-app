import '../styles/contact.css';
function Contact() {
	return (
		<div className="container">
			<div className="c-form">
				<h2>Contact Us</h2>
				<p>
					Feel free to contact us any time. We will get back to you as
					soon as we can.
				</p>
				<form action="#">
					<label htmlFor="Name">Your Name:</label>
					<input placeholder="Full Name"></input>
					<label htmlFor="email">Your Email Address:</label>
					<input placeholder="Enter your email ID"></input>
					<label htmlFor="message">Your Message:</label>
					<input
						id="message"
						placeholder="Write something..."
					></input>
					<button id="submit">Send!</button>
				</form>
				<div className="social">
					<i className="fa-brands fa-instagram fa-xl"></i>
					<i className="fa-brands fa-x-twitter fa-xl"></i>
					<i className="fa-brands fa-github fa-xl"></i>
				</div>
			</div>
		</div>
	);
}

export default Contact;
