import { useState } from 'react';

function Wish({ item }) {
	const [wish, setWish] = useState([]);
	function handleWish(item) {
		const index = wish.indexOf(item);
		console.log(index);
		if (index === -1) {
			setWish([...wish, item]); // Add item to wishlist if not already present
		} else {
			const updatedWishlist = [...wish];
			updatedWishlist.splice(index, 1); // Remove item from wishlist if already present
			setWish(updatedWishlist);
		}
	}
	return (
		<>
			<i
				className={
					wish.includes(item)
						? 'fa-solid fa-heart fa-lg'
						: 'fa-regular fa-heart fa-lg'
				}
				onClick={() => handleWish(item)}
			></i>
		</>
	);
}

export default Wish;
