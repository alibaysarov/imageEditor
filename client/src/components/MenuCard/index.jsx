import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";
import React from "react";

const MenuCard = ({ title, text, link = "/" }) => {
	const navigateHandler = () => {
		console.log(link);
	};
	return (
		<Card
			cursor={"pointer"}
			onClick={navigateHandler}
		>
			<CardHeader>
				<Image
					width={75}
					height={75}
					src={"/img/icons/Compress.svg"}
				/>
			</CardHeader>
			<CardBody>
				<Text
					color={"black"}
					fontSize={"36px"}
					fontWeight={"regular"}
				>
					{title}
				</Text>
				<Text
					color={"black"}
					fontSize={"20px"}
					fontWeight={"regular"}
					maxWidth={"401px"}
				>
					{text}
				</Text>
			</CardBody>
		</Card>
	);
};

export default MenuCard;
