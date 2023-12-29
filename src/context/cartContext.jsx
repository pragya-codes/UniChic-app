import { createContext, useState } from 'react';

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	const value = { cart, setCart, cartCount, setCartCount };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

export default CartContextProvider;
