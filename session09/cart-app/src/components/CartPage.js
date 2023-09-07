import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "../reducers/cartSlice";
import CartItem from "../components/CartItem";
import { Box, Heading } from "@chakra-ui/react";

const CartPage = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCartItems());
	}, [dispatch]);

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<Box p={4}>
			<Heading
				size="lg"
				mb={4}>
				Your Cart
			</Heading>
			{cartItems.length ? (
				<Box>
					{cartItems.map((item) => (
						<CartItem
							key={item.id}
							item={item}
						/>
					))}
					<Box>Total: ${totalPrice.toFixed(2)}</Box>
				</Box>
			) : (
				<Box>Your cart is empty.</Box>
			)}
		</Box>
	);
};

export default CartPage;
