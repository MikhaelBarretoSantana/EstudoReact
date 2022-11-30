
import React, {useState} from "react";
 import "./app.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {v4 as  uuidv4} from 'uuid'

const App = () => {
  const message = "Minhas Tarefas"

  const [tasks, setTasks] = useState([
      {
          id: '1',
          title: 'Estudar Programação',
          completed: false,
      },
      {
          id: '2',
          title: 'Ler livros',
          completed: true,
      },
  ]);

  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
          if (task.id === taskId) return {...task, completed: !task.completed};
          return task;
      });

      setTasks(newTasks)
  };

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [
          ...tasks,
          {
              title: taskTitle,
              id: uuidv4(),
              completed: false,
          },
      ];

      setTasks(newTasks)
  };

  return (
      <div className="container">
        <div > {message} </div>
          <AddTask handleTaskAddition={handleTaskAddition}/>

          <Tasks handleTaskClick={handleTaskClick} tasks={tasks}/>
      </div>
  )
};

export default App;
