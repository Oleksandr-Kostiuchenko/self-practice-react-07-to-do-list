//* Libraries
import style from "./Task.module.css";
import { RxCrossCircled } from "react-icons/rx";

//* Redux
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/operations";
import { toggleCompleted } from "../../redux/operations";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task));
  };

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(task));
  };

  if (!task) {
    return <p className={style.taskText}>Invalid task data</p>;
  }

  return (
    <div className={style.taskWrapper}>
      <input
        type="checkbox"
        onChange={handleToggleCompleted}
        checked={task.completed}
      />
      <p className={style.taskText}>
        {typeof task.text === "string" ? task.text : "Invalid task data"}
      </p>
      <button className={style.deleteBtn} onClick={handleDelete}>
        <RxCrossCircled className={style.deleteIcon} />
      </button>
    </div>
  );
};

export default Task;
