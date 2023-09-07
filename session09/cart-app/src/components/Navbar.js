import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Flex,
	Text,
	Heading,
	Input,
	HStack,
	useColorModeValue,
	Spacer,
	IconButton,
	Icon,
	useColorMode,
} from "@chakra-ui/react";
import CartIcon from "./CartIcon";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Flex
				minH={"60px"}
				w={"full"}
				position={"fixed"}
				py={"2"}
				px={"4"}
				borderBottom={1}
				borderColor={useColorModeValue("gray.200", "brown.500")}
				align={"center"}
				zIndex={10}
				bg={useColorModeValue("antiquewhite")}>
				<Flex justify={{ base: "center", md: "start" }}>
					<Box p={2}>
						<Heading size={"md"}>
							<Link to="/">Home</Link>
						</Heading>
					</Box>{" "}
					<Spacer />
					<Input
						size={"md"}
						w={"xl"}
						placeholder="Find items you need"
						alignSelf={"start"}
					/>
				</Flex>
				<Flex
					display={{ base: "none", md: "flex" }}
					ml={10}></Flex>
				<HStack
					flex={{ base: 1, md: 0 }}
					justify={"flex-end"}
					spacing={"3"}>
					<Box>
						<IconButton
							icon={<Icon as={colorMode === "light" ? FaSun : FaMoon} />}
							onClick={toggleColorMode}
							variant={"ghost"}
							rounded={"full"}
						/>
					</Box>
					<Box>
						<CartIcon />
					</Box>
				</HStack>
			</Flex>
			{/* <Flex
				justifyContent="space-between"
				alignItems="center"
				bg="primary"
				color="secondary"
				p={4}>
				<Link to="/">
					<Text fontSize="xl">Home</Text>
				</Link>
			</Flex> */}
		</>
	);
};

export default Navbar;
