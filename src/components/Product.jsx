/* eslint-disable react/prop-types */
import '../styles/Product.css';
function Product({ title, img, price }) {
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
				<li className="price">$ {price}</li>
				<li>
					<button className="btn">ADD TO CART</button>
				</li>
			</ul>
		</>
	);
}

export default Product;
