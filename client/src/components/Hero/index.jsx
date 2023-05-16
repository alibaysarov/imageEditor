import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrollToMenu } from "../../store/slices/uiSlice";
const Hero = () => {
	const dispatch = useDispatch();
	const { heroMt } = useSelector((state) => state.ui);
	const btnClickHandler = () => {
		dispatch(scrollToMenu());
	};
	return (
		<Box
			p={20}
			height={"90vh"}
			w={"100%"}
			mt={heroMt}
			boxSizing="border-box"
			bgGradient={"linear-gradient(89.89deg, #E4F709 10.22%, #866BC6 92.64%)"}
		>
			<Flex
				direction="column"
				justifyContent={"space-between"}
				alignItems={"center"}
				gap={20}
			>
				<Box maxWidth={"968px"}>
					<Text
						display={"inline-block"}
						fontSize={"60px"}
						fontWeight={"bold"}
						color={"white"}
						textAlign={"center"}
						as="h1"
					>
						Image Editor -{" "}
						<Text
							display={"inline-block"}
							fontSize={"60px"}
							fontWeight={"bold"}
							color={"#E4F609"}
							as="span"
						>
							сервис
						</Text>{" "}
						<Text
							display={"inline-block"}
							fontSize={"60px"}
							fontWeight={"bold"}
							color={"white"}
							as="span"
						>
							для работы с картинками
						</Text>{" "}
					</Text>
				</Box>
				<Button
					onClick={btnClickHandler}
					size={"lg"}
					colorScheme="blue"
				>
					Подобнее
				</Button>
			</Flex>
		</Box>
	);
};

export default Hero;
