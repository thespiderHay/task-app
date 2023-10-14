import type { TaskState, Task2 } from "../../shared/interfaces";
import React from "react";
import ItemCards from "./ItemCards";

interface CardsProps {
  tasks: TaskState;
  deleteTask(item: Task2): void;
  toggleTask(item: Task2): void;
  EditTask(item: Task2): void;
}

const Cards: React.FC<CardsProps> = ({
  tasks,
  deleteTask,
  toggleTask,
  EditTask,
}) => {
  return (
    <div>
      {tasks.search.length > 0
        ? tasks.search.map((task, index) => (
            <ItemCards
              key={index}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              EditTask={EditTask}
            />
          ))
        : tasks.tasks.map((task, index) => (
            <ItemCards
              key={index}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              EditTask={EditTask}
            />
          ))}
    </div>
  );
};

export default Cards;
