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
    dispatch(deleteTask(task.id));
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
        onChange={handleToggleCompleted}
        type="checkbox"
        checked={task.completed}
      />
      <p className={style.taskText}>
        {typeof task.text === "string" ? task.text : "Invalid task data"}
      </p>
      <button onClick={handleDelete} className={style.deleteBtn}>
        <RxCrossCircled className={style.deleteIcon} />
      </button>
    </div>
  );
};

export default Task;
