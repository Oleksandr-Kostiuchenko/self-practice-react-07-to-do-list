//* Components
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Loader from "./components/Loader/Loader";

//* Redux
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations";

//* Redux selectors
import { selectItems, selectError, selectIsLoading } from "./redux/tasksSlice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <TaskForm />
      <TaskList />
      {isLoading && <Loader />}
      {error && <p>Error 404! Something went wrong</p>}
    </>
  );
}

export default App;
