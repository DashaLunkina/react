import { FC } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';
import { Task } from './type';



interface TaskListProps {
  tasks: Task[];
  toggleStatus: (id: number) => void;
  deleteTask: (id: number) => void;
  startEditing: (task: Task) => void;
}

const TaskList:FC<TaskListProps>=({ tasks, toggleStatus, deleteTask, startEditing })=> {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleStatus={toggleStatus}
          deleteTask={deleteTask}
          startEditing={startEditing}
        />
      ))}
    </ul>
  );
}

export default TaskList;
