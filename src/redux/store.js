//* Redux
import { configureStore } from "@reduxjs/toolkit";

//* Reducers
import taskReducer from "./tasksSlice";
import filterReducer from "./filterSlice";

//* Persist
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistedTasksReducer = persistReducer(
//   {
//     key: "tasks",
//     storage,
//   },
//   taskReducer
// );

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistedStore = persistStore(store);
