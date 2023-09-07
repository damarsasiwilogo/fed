import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge, Box } from "@chakra-ui/react";
import CartDropdown from "./CartDropdown";

const CartIcon = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const totalQuantity = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	);

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
	};

	return (
		<Box
			onClick={toggleDropdown}
			position="relative">
			<Link to="/cart">
				<FontAwesomeIcon icon={faShoppingCart} />
				<Badge
					colorScheme="red"
					ml={1}>
					{totalQuantity}
				</Badge>
			</Link>
			{dropdownVisible && <CartDropdown cartItems={cartItems} />}
		</Box>
	);
};

export default CartIcon;
