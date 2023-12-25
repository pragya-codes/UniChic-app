import '../styles/Product.css';
function Product() {
	return (
		<>
			{/* <ul className="product">
				<li>
					<img>
						....
						onclick -> prod details component
						<like component />
					</img>
				</li>
				<li>name</li>
				<li>desc</li>
				<li>price</li>
				<li>add to cart</li>
			</ul> */}
			<ul className="product">
				<li>
					<img src="src\assets\placeholder-img.png" alt="img"></img>
				</li>
				<li className="title">title</li>
				<li className="desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Inventore, voluptates!
				</li>
				<li className="price">Rs XXXX</li>
				<li>
					<button className="btn">ADD TO CART</button>
				</li>
			</ul>
		</>
	);
}

export default Product;
