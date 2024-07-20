import React from "react";
import Task from "./Task";

interface TaskT {
  id: string;
  title: string;
  completed: boolean;
}

interface TasksProps {
  tasks: TaskT[];
  handleTaskClick: (taskId: string) => void;
  handleTaskDeletion: (taskId: string) => void;
}

const Tasks: React.FC<TasksProps> = ({
  tasks,
  handleTaskClick,
  handleTaskDeletion,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </div>
  );
};

export default Tasks;
