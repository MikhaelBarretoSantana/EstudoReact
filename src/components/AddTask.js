
import React, {useState} from "react";
import "./AddTask.css"
import ButtonAddTasks from "./ButtonAddTasks";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    };

    return(
        <div>
            <input
                onChange={handleInputChange}
                value={inputData}
                className="input"
                type="text"
            />

            <ButtonAddTasks onClick={handleAddTaskClick}> Adicionar </ButtonAddTasks>
        </div>
);
}

export default AddTask;
