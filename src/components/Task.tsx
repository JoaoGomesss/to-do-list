import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { toggleTaskCompletion, deleteTask } from "../store";
import { useNavigate } from "react-router-dom";
import { CgClose, CgInfo } from "react-icons/cg";
import "./Task.css";

interface TaskProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
}

const Task: FunctionComponent<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid rgb(0, 60, 255)" } : {}}
    >
      <div
        className="task-title"
        onClick={() => dispatch(toggleTaskCompletion(task.id))}
      >
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="remove-task-button"
        >
          <CgClose />
        </button>
        <button className="info-task-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
