import React from "react";
import { chakra, Button, Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setHeaderHeight } from "../../store/slices/uiSlice";

const MyButton = chakra(Button, {
	baseStyle: {
		fontSize: "16px",
		lineHeight: "28px",
		fontWeight: 600,
	},
});

const Header = () => {
	const headerRef = React.useRef(null);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(setHeaderHeight(headerRef.current.offsetHeight));
	}, []);
	return (
		<Box
			ref={headerRef}
			bgColor={"white"}
			shadow={"base"}
			w={"100%"}
			p={"10px"}
			sx={{
				position: "fixed",
				top: "0px",
				left: "0px",
				zIndex: 1000,
			}}
		>
			<Flex
				dir="row"
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<Flex>
					<Text
						fontSize={"36px"}
						fontWeight={"800"}
						color={"green.400"}
					>
						Image
					</Text>
					<Text
						fontSize={"36px"}
						fontWeight={"800"}
						color={"blue.600"}
					>
						Editor
					</Text>
				</Flex>

				<Flex
					dir="row"
					gap={"15px"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<MyButton
						colorScheme="blue"
						variant="outline"
					>
						Войти
					</MyButton>
					<MyButton colorScheme="blue">Регистрация</MyButton>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Header;
