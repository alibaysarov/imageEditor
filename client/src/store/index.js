import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";

export default configureStore({
	reducer: {
		ui: uiSlice,
	},
});
