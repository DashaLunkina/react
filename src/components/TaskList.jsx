import TaskItem from './TaskItem';
import './TaskList.css'

function TaskList({ tasks, toggleStatus, deleteTask, startEditing }) {
  return (
    <ul>
      {tasks.map(task => (
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
