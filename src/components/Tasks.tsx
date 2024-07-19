import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Task from "./Task";

const Tasks: FunctionComponent = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
