import React from "react";
import { Box } from "@chakra-ui/react";

const CartItem = ({ item }) => {
	const { name, price, quantity } = item;

	return (
		<Box mb={2}>
			<div className="item-details">
				<span className="item-name">{name}</span>
				<span className="item-price">${price}</span>
				<span className="item-quantity">Quantity: {quantity}</span>
			</div>
		</Box>
	);
};

export default CartItem;
