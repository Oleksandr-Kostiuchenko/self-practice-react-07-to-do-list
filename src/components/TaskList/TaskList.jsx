//* Components
import style from "./TaskList.module.css";
import Task from "../Task/Task";

//* Redux
import { useSelector } from "react-redux";

//* Redux selectors
import { selectVisibleTasks } from "../../redux/tasksSlice";

const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <ul className={style.taskList}>
      {visibleTasks.map((el) => (
        <li key={el.id}>
          <Task task={el} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
