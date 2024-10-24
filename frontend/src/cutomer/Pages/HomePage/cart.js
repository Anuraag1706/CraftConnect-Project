import { useState, useContext, createContext, useEffect } from "react";
import PropTypes from 'prop-types';  // Import PropTypes

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let existingCartItem = localStorage.getItem('cart');
        if (existingCartItem) {
            setCart(JSON.parse(existingCartItem));
        }
    }, []);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};

// Add PropTypes validation
CartProvider.propTypes = {
    children: PropTypes.node.isRequired // Validate that children is a React node and required
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
