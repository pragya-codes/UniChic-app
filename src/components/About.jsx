function About() {
	return (
		<>
			<div
				className="container"
				style={{ height: '100vh', padding: '5rem', textAlign: 'left' }}
			>
				<h2 style={{ paddingLeft: '5.5rem', textAlign: 'left' }}>
					ABOUT US.
				</h2>
				<div
					className="about"
					style={{
						display: 'flex',
						justifyContent: 'space-around',
					}}
				>
					<p style={{ width: '50%', lineHeight: '2rem' }}>
						UniChic caters to thoughtful shoppers who appreciate
						unique designs and top quality pieces you just can not
						find elsewhere. We are constantly curating fresh new
						collections and looking for the next big thing our
						customers will love. Founded in India in 2023, we are
						proud to be your Online Clothing Shop that you can rely
						on for our expert service and care. We are here to serve
						you and make sure you find the Perfect Look for every
						occasion. Our passion for fashion is the reason why we
						are here. We absolutely love what we do, and our goal is
						to help our customers by providing them with unique
						outfit and accessories that make them stand-out from the
						crowd.
					</p>
					<img
						style={{
							height: '100%',
							objectFit: 'cover',
						}}
						src="src\assets\about.png"
						alt="about image"
						className="image"
					></img>
				</div>
			</div>
		</>
	);
}

export default About;
