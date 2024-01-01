import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./reducer/wordReducer";


const store = configureStore({
    reducer : wordReducer,
});

export default store;