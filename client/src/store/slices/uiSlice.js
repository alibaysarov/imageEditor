import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: {
		heroMt: 0,
		menuOffsetY: 0,
	},

	reducers: {
		setHeaderHeight: (state, action) => {
			state.heroMt = action.payload + "px";
		},
		setMenuOffset: (state, action) => {
			state.menuOffsetY = action.payload;
		},
		scrollToMenu: (state) => {
			window.scrollTo({
				top: state.menuOffsetY,
				left: 0,
				behavior: "smooth",
			});
		},
	},
});
export const { setHeaderHeight, setMenuOffset, scrollToMenu } = uiSlice.actions;
export default uiSlice.reducer;
