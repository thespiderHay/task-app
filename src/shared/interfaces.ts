export type Task = {
    id: number;
    name: string;
    description: string;
    complete: boolean;
  }

  export interface Task2  {
    id: number;
    name: string;
    description: string;
    complete: boolean;
  }

  
  // Define the initial state
  export interface TaskState {
    tasks: Task2[];
    search: Task2[];
  }

  export interface TaskListProps {
    tasks: Task[];
  }