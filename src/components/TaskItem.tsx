import { useState, useEffect } from 'react';
import './TaskItem.css';
import { Task } from './type';


interface TaskItemProps {
  task: Task;
  toggleStatus: (id: number) => void;
  deleteTask: (id: number) => void;
  startEditing: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleStatus, deleteTask, startEditing }) => {
  const [isEntering, setIsEntering] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  // Automatically remove the 'enter' class after the animation completes
  useEffect(() => {
    if (isEntering) {
      const timer = setTimeout(() => setIsEntering(false), 300); // Match the animation duration
      return () => clearTimeout(timer);
    }
  }, [isEntering]);

  const handleDelete = () => {
    setIsLeaving(true);
    setTimeout(() => deleteTask(task.id), 300); // Wait for exit animation to finish
  };

  return (
    <li className={`task-item ${isEntering ? 'enter' : ''} ${isLeaving ? 'exit' : ''}`}>
      <div>
        <h2 style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
          {task.header}
        </h2>
        <p style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
          {task.description}
        </p>
      </div>
      <div>
        <input
          type="checkbox"
          checked={task.status}
          onChange={() => toggleStatus(task.id)}
        />
        <button onClick={() => startEditing(task)}>Edit</button>
        <button onClick={handleDelete}>Del</button>
      </div>
    </li>
  );
};

export default TaskItem;
