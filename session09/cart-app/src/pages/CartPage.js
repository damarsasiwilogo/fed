import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartPage = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);

	return (
		<div className="cart-page">
			<h2>Your Cart</h2>
			{cartItems.length ? (
				<div className="cart-items">
					{cartItems.map((item) => (
						<CartItem
							key={item.id}
							item={item}
						/>
					))}
				</div>
			) : (
				<p>Your cart is empty.</p>
			)}
		</div>
	);
};

export default CartPage;
