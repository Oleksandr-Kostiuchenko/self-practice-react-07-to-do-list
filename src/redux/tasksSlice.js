//* Redux & Actions
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";
import { addTask } from "./operations";
import { toggleCompleted } from "./operations";
import { deleteTask } from "./operations";

//* Handlers
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
};

//* Slice
const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    // FetchAll
    builder.addCase(fetchTasks.pending, handlePending);
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchTasks.rejected, handleRejected);

    // Add
    builder.addCase(addTask.pending, handlePending);
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(addTask.rejected, handleRejected);

    // Toggle completed
    builder.addCase(toggleCompleted.pending, handlePending);
    builder.addCase(toggleCompleted.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    });
    builder.addCase(toggleCompleted.rejected, handleRejected);

    // Delete
    builder.addCase(deleteTask.pending, handlePending);
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((el) => el.id !== action.payload.id);
    });
    builder.addCase(deleteTask.rejected, handleRejected);
  },
});

export default slice.reducer;

//* Selectors
import { selectFilter } from "./filterSlice";
export const selectItems = (state) => state.tasks.items;
export const selectIsLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;

export const selectVisibleTasks = createSelector(
  [selectItems, selectFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectCounter = createSelector([selectItems], (tasks) => {
  const counter = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    {
      active: 0,
      completed: 0,
    }
  );

  return counter;
});
