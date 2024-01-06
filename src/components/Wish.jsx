import { useContext } from 'react';
import { WishContext } from '../context/wishContext';

function Wish({ item }) {
	const { wish, setWish, setWishCount } = useContext(WishContext);

	function handleWish(item) {
		const index = wish.indexOf(item);
		console.log(index);
		if (index === -1) {
			setWish([...wish, item]);
			setWishCount((wishCount) => wishCount + 1); // Add item to wishlist if not already present
		} else {
			const updatedWishlist = [...wish];
			updatedWishlist.splice(index, 1); // Remove item from wishlist if already present
			setWish(updatedWishlist);
			setWishCount((wishCount) => (wishCount > 0 ? wishCount - 1 : 0));
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
