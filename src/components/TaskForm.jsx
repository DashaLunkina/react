import { useEffect } from 'react';
import './TaskForm.css';

function TaskForm({ header, setHeader, description, setDescription, addTask, editingTask, saveTask }) {
  useEffect(() => {
    if (editingTask) {
      setHeader(editingTask.header);
      setDescription(editingTask.description);
    } else {
      setHeader('');
      setDescription('');
    }
  }, [editingTask, setHeader, setDescription]);

  const handleSubmit = () => {
    if (editingTask) {
      saveTask(editingTask.id);
    } else {
      addTask();
    }
  };

  return (
    <div className="task-form">
      <input
        value={header}
        onChange={e => setHeader(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button onClick={handleSubmit}>
        {editingTask ? 'Save Task' : 'Add Task'}
      </button>
    </div>
  );
}

export default TaskForm;
