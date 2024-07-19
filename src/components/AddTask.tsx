import { useState, FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store";
import "./AddTask.css";
import Button from "./Button";

const AddTask: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue("");
    }
  };

  return (
    <div className="add-task-container">
      <input
        className="add-task-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTask}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
