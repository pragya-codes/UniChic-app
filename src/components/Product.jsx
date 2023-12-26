import '../styles/Product.css';
function Product({ title, img }) {
	return (
		<>
			<ul className="product">
				<li>
					<img src={img} alt="img"></img>
				</li>
				<li className="title">{title}</li>
				{/* <li className="desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Inventore, voluptates!
				</li> */}
				<li className="price">Rs XXXX</li>
				<li>
					<button className="btn">ADD TO CART</button>
				</li>
			</ul>
		</>
	);
}

export default Product;
