import React from "react";
import { Box } from "@chakra-ui/react";
import CartItem from "./CartItem";

const CartDropdown = ({ cartItems }) => {
	return (
		<Box
			bg="white"
			p={2}
			mt={1}
			boxShadow="md"
			position="absolute"
			zIndex="1">
			{cartItems.length ? (
				<Box>
					{cartItems.map((item) => (
						<CartItem
							key={item.id}
							item={item}
						/>
					))}
				</Box>
			) : (
				<Box>Your cart is empty</Box>
			)}
		</Box>
	);
};

export default CartDropdown;
