//* Libraries
import style from "./TaskForm.module.css";
import { nanoid } from "nanoid";

//* Components
import Button from "../Button/Button";

//* Redux
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.elements.text.value.trim() === "") {
      alert("Please enter task");
      return;
    }

    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form
      className={style.formWrapper}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        className={style.taskInput}
        type="text"
        name="text"
        placeholder="Enter task..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;
