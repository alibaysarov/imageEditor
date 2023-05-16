import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import MenuCard from "../MenuCard";
import { useDispatch } from "react-redux";
import { setMenuOffset } from "../../store/slices/uiSlice";

const Menu = () => {
	const menuRef = React.useRef(null);
	const menu = [
		{
			title: "Сжать изображение",
			link: "/compress",
			text: "Сжимайте PNG,JPG картинки без потери качества",
		},
		{
			title: "Обрезать картинку",
			link: "/crop",
			text: "Сжимайте PNG,JPG картинки без потери качества",
		},
		{
			title: "Убрать задний фон",
			link: "/removebg",
			text: "Сжимайте PNG,JPG картинки без потери качества",
		},
	];
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(setMenuOffset(menuRef.current.getBoundingClientRect().top));
	}, []);
	return (
		<Box
			py={20}
			px={"20px"}
		>
			<Grid
				ref={menuRef}
				templateColumns="repeat(3, 1fr)"
				gap={30}
			>
				{menu.map((link) => (
					<GridItem w="100%">
						<MenuCard
							key={link.link}
							{...link}
						/>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};

export default Menu;
