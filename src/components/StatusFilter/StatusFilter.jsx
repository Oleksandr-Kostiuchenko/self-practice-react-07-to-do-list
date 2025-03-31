//* Components
import style from "./StatusFilter.module.css";
import Button from "../Button/Button";

//* Redux
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filterSlice";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.status);

  const handleChangeFilter = (filter) => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={style.btnWrapper}>
      <Button
        onClick={() => handleChangeFilter("all")}
        selected={filter === "all"}
      >
        All
      </Button>
      <Button
        onClick={() => handleChangeFilter("active")}
        selected={filter === "active"}
      >
        Active
      </Button>
      <Button
        onClick={() => handleChangeFilter("completed")}
        selected={filter === "completed"}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
