import style from "./TaskCounter.module.css";

//* Redux
import { useSelector } from "react-redux";

//* Redux selectors
import { selectCounter } from "../../redux/tasksSlice";

const TaskCounter = () => {
  const count = useSelector(selectCounter);

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};

export default TaskCounter;
