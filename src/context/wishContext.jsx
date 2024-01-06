import { createContext, useState } from 'react';

export const WishContext = createContext(null);

const WishContextProvider = ({ children }) => {
	const [wish, setWish] = useState([]);
	const [wishCount, setWishCount] = useState(0);

	const value = { wish, setWish, wishCount, setWishCount };

	return (
		<WishContext.Provider value={value}>{children}</WishContext.Provider>
	);
};

export default WishContextProvider;
