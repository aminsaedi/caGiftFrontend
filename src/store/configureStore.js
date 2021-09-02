/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function () {
  return configureStore({
    reducer,
    // middleware: [...getDefaultMiddleware(), toast, api],
  });
}
