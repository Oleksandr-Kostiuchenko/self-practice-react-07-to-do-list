//* Redux
import { configureStore } from "@reduxjs/toolkit";

//* Reducers
import taskReducer from "./tasksSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
  },
});
